# ether-clhelloworld

**"Hello, World!"** smart contract for Ethereum.

## Developer Steps to create this project

* `npm init --yes`
* `yarn add -D hardhat`
* `npx hardhat` (choose empty project and create **contracts** and **scripts** folders)
* `yarn add @nomiclabs/hardhat-ethers` for deploy and interact scripts
* `yarn add -D @nomiclabs/hardhat-etherscan` for etherscan integration

## Compile & Deploy

* `yarn compile`
* `yarn deploy`
* update **.env** with the returned `CONTRACT_ADDRESS` to point to this contract

## Verify on etherscan

```bash
npx hardhat verify $CONTRACT_ADDRESS ctor_args
```