require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: String(process.env.INFURA_SEPOLIA_ENDPOINT),
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};