# ether-clhelloworld

**"Hello, World!"** smart contract for Ethereum.

## Examples

* [CLHelloWorld.sol](./contracts/CLHelloWorld.sol) - the most basic smart contract with a single state variable
* [NFT.sol](./contracts/NFT.sol) - the most basic NFT from [this opensea tutorial](https://docs.opensea.io/docs/setting-up-your-smart-contract-project)
* [NFTMeta.sol](./contracts/NFTMeta.sol) - basic NFT with JSON meta-data from [this opensea tutorial](https://docs.opensea.io/docs/part-3-adding-metadata-and-payments-to-your-contract)

## Developer Steps to create this project

* `npm init --yes`
* `yarn add -D hardhat`
* `npx hardhat` (choose empty project and create **contracts** and **scripts** folders)
* `yarn add @nomiclabs/hardhat-ethers` for deploy and interact scripts
* `yarn add -D @nomiclabs/hardhat-etherscan` for etherscan integration

## Compile & Deploy

* `yarn compile`
* `yarn deploy`
* update **.env** with the returned `CONTRACT_ADDRESS` to point to this contract

## Verify on etherscan

```bash
npx hardhat verify $CONTRACT_ADDRESS ctor_args
```