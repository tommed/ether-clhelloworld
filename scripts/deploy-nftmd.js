(async function main() {

  // Get our account (as deployer) to verify that a minimum wallet balance is available
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

  // deploy
  const NFTMeta = await ethers.getContractFactory("NFTMeta");
  const ret = await NFTMeta.deploy();
  console.log('deployed nft meta contract to', ret.address);

})()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })