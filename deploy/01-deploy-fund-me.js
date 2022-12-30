const { network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // if chainId is X use address Y
  // if chainId is Z use address A
  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    const ethUsedAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsedAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  // if the contract doesn't exists, we deploy a minimal verison of
  // for our local testing

  // well what happen when we want to change the chains
  // when going for localhost or hardhat network we want to use a mock
  const args = [ethUsdPriceFeedAddress];
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: args, //put price feed address
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    // verify the contract
    await verify(fundMe.address, args);
  }
  log("--------------------------------------------");
};

module.exports.tags = ["all", "fundme"];
