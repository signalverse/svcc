require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require("hardhat-gas-reporter");
require("solidity-coverage");

const SOLIDITY_VERSION = "0.8.12";
const SOLIDITY_OPTIMIZER_RUNS = 200;

const blockchainPlatform = process.env.BLOCKCHAIN_PLATFORM;
const coinmarketcapApiKey = process.env.COINMARKETCAP_API_KEY;

const bscScanApiKey = process.env.BSCSCAN_API_KEY;
const bscTestnetPrivateKey = process.env.BSC_TESTNET_PRIVATE_KEY;

let verifyContractApiKey;

if (blockchainPlatform === "BSC") {
  verifyContractApiKey = bscScanApiKey;
} else {
  throw new Error(`Unknown Blockchain Platform: ${blockchainPlatform}`);
}

if (verifyContractApiKey === undefined) {
  throw new Error("Unknown Verify Contract API Key");
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const config = {
  solidity: {
    version: SOLIDITY_VERSION,
    settings: {
      optimizer: {
        enabled: true,
        runs: SOLIDITY_OPTIMIZER_RUNS,
      },
    },
  },
  mocha: {
    timeout: 30000,
  },
  etherscan: {
    apiKey: verifyContractApiKey,
  },
  gasReporter: {
    currency: "USD",
    coinmarketcap: coinmarketcapApiKey,
    outputFile: "gas-usage.txt",
    noColors: true,
  },
};

if (!config.networks) {
  config.networks = {};
}

config.networks["hardhat"] = {
  initialBaseFeePerGas: 0,
  accounts: {
    count: 10,
  },
};

if (blockchainPlatform === "BSC" && bscTestnetPrivateKey) {
  config.networks["bsc-testnet"] = {
    url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    accounts: [`0x${bscTestnetPrivateKey}`],
    gasMultiplier: 2, // For testnet only
  };
}

module.exports = config;
