const { assert, expect } = require("chai");
const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

developmentChains.includes(network.name) &&
  describe("FundMe", () => {
    let fundMe, deployer, mockV3Aggregator;
    const sendValue = ethers.utils.parseEther("1"); // 1 ETH

    beforeEach(async () => {
      deployer = (await getNamedAccounts()).deployer;
      await deployments.fixture(["all"]);
      fundMe = await ethers.getContract("FundMe", deployer);
      mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);
    });

    describe("Constructor", () => {
      it("Sets the aggregator address correctly", async () => {
        const response = await fundMe.getPriceFeed();
        assert.equal(response, mockV3Aggregator.address)
      });
    });

    describe("Fund", () => {
      it("Fails if you don't send enough ETH", async () => {
        await expect(fundMe.fund()).to.be.revertedWith(
          "You need to spend more ETH!"
        )
      })

      it("Updated the amount funded data structure", async () => {
        await fundMe.fund({ value: sendValue });
        const responce = await fundMe.getAmountToAddressFunded(deployer);
        assert.equal(responce.toString(), sendValue.toString());
      })

      it("Adds funder to array of funders", async () => {
        await fundMe.fund({ value: sendValue });
        const funder = await fundMe.getFunder(0);
        assert.equal(funder, deployer);
      })
    })

    describe("Withdraw", () => {
      beforeEach(async () => {
        await fundMe.fund({ value: sendValue });
      })

      it("Withdraw ETH from a single funder", async () => {
        // Arrange
        const startingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const startingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Act
        const transactionResponce = await fundMe.withdraw()
        const transactionReceipt = await transactionResponce.wait(1);
        const { gasUsed, effectiveGasPrice } = transactionReceipt;
        const gasCost = gasUsed.mul(effectiveGasPrice);

        const endingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const endingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Assert
        assert.equal(endingFundMeBalance, 0);
        assert.equal(
          startingFundMeBalance.add(startingDeployerBalance).toString(),
          endingDeployerBalance.add(gasCost)
        );
      })

      it("Withdraw ETH from multiple funders", async () => {
        // Arrange
        const accounts = await ethers.getSigners();
        for (let i = 1; i < 6; i++) {
          const fundMeConnectedContract = await fundMe.connect(accounts[i]);
          await fundMeConnectedContract.fund({ value: sendValue });
        }
        const startingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const startingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Act
        const transactionResponce = await fundMe.withdraw()
        const transactionReceipt = await transactionResponce.wait(1);
        const { gasUsed, effectiveGasPrice } = transactionReceipt;
        const gasCost = gasUsed.mul(effectiveGasPrice);
        const endingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const endingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Assert
        assert.equal(endingFundMeBalance, 0);
        assert.equal(
          startingFundMeBalance.add(startingDeployerBalance).toString(),
          endingDeployerBalance.add(gasCost)
        );

        // make sure that the funders are reset correctly
        await expect(fundMe.getFunder(0)).to.be.reverted;

        for (let i = 1; i < 6; i++) {
          assert.equal(await fundMe.getAmountToAddressFunded(accounts[i].address), 0);
        }
      })

      it("Only allows the owner to withdraw", async () => {
        const accounts = await ethers.getSigners();
        const attacker = accounts[1];
        const attackerConnectedContract = await fundMe.connect(attacker);
        await expect(attackerConnectedContract.withdraw()).to.be.revertedWith("FundMe__NotOwner");
      })

      it("Cheap Withdraw ETH from a single funder", async () => {
        // Arrange
        const startingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const startingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Act
        const transactionResponce = await fundMe.cheaperWithdraw()
        const transactionReceipt = await transactionResponce.wait(1);
        const { gasUsed, effectiveGasPrice } = transactionReceipt;
        const gasCost = gasUsed.mul(effectiveGasPrice);

        const endingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const endingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Assert
        assert.equal(endingFundMeBalance, 0);
        assert.equal(
          startingFundMeBalance.add(startingDeployerBalance).toString(),
          endingDeployerBalance.add(gasCost)
        );
      })

      it("Cheap Withdraw ETH from multiple funders", async () => {
        // Arrange
        const accounts = await ethers.getSigners();
        for (let i = 1; i < 6; i++) {
          const fundMeConnectedContract = await fundMe.connect(accounts[i]);
          await fundMeConnectedContract.fund({ value: sendValue });
        }
        const startingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const startingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Act
        const transactionResponce = await fundMe.cheaperWithdraw()
        const transactionReceipt = await transactionResponce.wait(1);
        const { gasUsed, effectiveGasPrice } = transactionReceipt;
        const gasCost = gasUsed.mul(effectiveGasPrice);
        const endingFundMeBalance = await fundMe.provider.getBalance(fundMe.address);
        const endingDeployerBalance = await fundMe.provider.getBalance(deployer);

        // Assert
        assert.equal(endingFundMeBalance, 0);
        assert.equal(
          startingFundMeBalance.add(startingDeployerBalance).toString(),
          endingDeployerBalance.add(gasCost)
        );

        // make sure that the funders are reset correctly
        await expect(fundMe.getFunder(0)).to.be.reverted;

        for (let i = 1; i < 6; i++) {
          assert.equal(await fundMe.getAmountToAddressFunded(accounts[i].address), 0);
        }
      })
    })
  });
