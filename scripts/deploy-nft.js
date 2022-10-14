(async function main() {

  // Get our account (as deployer) to verify that a minimum wallet balance is available
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

  // deploy
  const NFTSol = await ethers.getContractFactory("NFT");
  const ret = await NFTSol.deploy();
  console.log('deployed nft contract to', ret.address);

})()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })