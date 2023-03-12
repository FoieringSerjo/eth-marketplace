require('dotenv').config({ path: './.env', debug: true });
require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/3cedf15027134b1d8bfd53873f85edcc',
      accounts: [process.env.METAMASK_PRIVATE_KEY_DEV],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
};
