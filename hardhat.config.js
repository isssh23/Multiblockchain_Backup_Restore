require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/3oJs9RVJ8bRDAJLKq8PIU",
      accounts: ["d1fe347fd62dac5130ff265d817400045c4ca4b2746241fc5e6d7e8f9f69c9f4"]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: "PZD3RHMS4DGR2916EERXWBHX1CG3AZQ36P"
    }
  }
};
