const { ethers } = require('hardhat');
const contract = require('../artifacts/contracts/CLHelloWorld.sol/CLHelloWorld.json');

// config
require('dotenv').config();
const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS, NETWORK } = process.env;

(async function main() {

  // set-up interacting parties
  const provider = new ethers.providers.AlchemyProvider(NETWORK, API_KEY);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const clhw = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

  // get current message
  let message = await clhw.message();
  console.log('current message', message);

  // update message
  console.info('updating message');
  const tx = await clhw.update(`message updated at ${new Date().toISOString()}`);
  await tx.wait();

  // ensure message was updated
  message = await clhw.message();
  console.log('message is now', message);

})()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  })