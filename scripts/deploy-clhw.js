(async function main() {

  const CLHelloWorld = await ethers.getContractFactory("CLHelloWorld");
  const ret = await CLHelloWorld.deploy("initial message value");
  console.log('deployed clhw to', ret.address);

})()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })