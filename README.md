# Web3-Whitelist

This project contains a smart contract and script to deploy contract to rinkeby/goerli test networks.

# Environment Variables

This project requires the following environment variables:
```
RINKEBY_URL=<ALCHEMY RINKEBY API URL>
PRIVATE_KEY=<WALLET PRIVATE KEY>
```
# Usage
```shell
npm i
npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deploy.ts --network rinkeby   
```

