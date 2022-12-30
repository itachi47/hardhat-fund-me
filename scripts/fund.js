const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fudnMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding Contract...");
    const transactionResponce = await fudnMe.fund({ value: ethers.utils.parseEther("0.1") })
    await transactionResponce.wait(1);
    console.log("Contract funded!");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })