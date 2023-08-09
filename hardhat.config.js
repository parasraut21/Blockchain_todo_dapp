require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.0",
  networks:{
    sepolia:{
      url:process.env.ALCHEMY_URL,
      accounts:[process.env.WALLET_PRIVATE_KEY]
    }
  }
};
