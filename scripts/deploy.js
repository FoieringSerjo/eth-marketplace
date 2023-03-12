const hre = require('hardhat');

async function main() {
  const marketplaceFactory = await hre.ethers.getContractFactory(
    'Marketplace'
  );

  const marketplaceDeploy = await marketplaceFactory.deploy();

  await marketplaceDeploy.deployed();

  console.log(
    'Contract Marketplace deployed to address: ',
    marketplaceDeploy.address
  );
}

// Contract Marketplace deployed to address:  0xd8A70E5b4bEcf6Bc32c248edE04eA8F23C67C756

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
