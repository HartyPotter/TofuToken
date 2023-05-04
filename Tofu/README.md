# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
# Notes
1. The smart contract was deployed using hardhat and deployed through Infura's Web3 API into the Sepolia testnet.
2. `.env` file that contains the private key and the API gateway URL is not included.
3. Although `selfdestruct()` is deprectead I included it in the smart contract in case I want to delete it later as it is still in development.
