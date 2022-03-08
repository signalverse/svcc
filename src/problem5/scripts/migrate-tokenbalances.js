// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const deployHelper = require("./deploy-helpers");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const network = hre.network.name;

  console.log(`Network: ${network}`);

  let isPublicNetwork = true;

  if (network === "bsc-testnet") {
  } else {
    throw new Error(`Unknown network: ${network}`);
  }

  // We get the contract to deploy
  const TokenBalancesFactory = await hre.ethers.getContractFactory("TokenBalances");
  const TokenBalancesContract = await deployHelper.deployContract(TokenBalancesFactory, [], true);

  await deployHelper.contractDeployed(TokenBalancesContract, isPublicNetwork);

  console.log("TokenBalances:", TokenBalancesContract.address);

  if (isPublicNetwork) {
    console.log("Verify Contracts");

    await deployHelper.tryVerifyContract(TokenBalancesContract);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
