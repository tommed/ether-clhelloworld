(async function main() {

  const CLHelloWorld = await ethers.getContractFactory("CLHelloWorld");
  const ret = await CLHelloWorld.deploy("initial message value");
  console.log('deployed to', ret.address);

})()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  })