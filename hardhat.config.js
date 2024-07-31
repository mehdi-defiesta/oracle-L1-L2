require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_PROVIDER_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    optimismSepolia: {
      url: process.env.OPTIMISM_SEPOLIA_PROVIDER_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
