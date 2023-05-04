const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Compile the contract
  const contractSource = fs.readFileSync("TofuToken.sol").toString();
  const contractOutput = await ethers.getContractFactory(contractSource);
  
  // Get the ABI
  const contractAbi = contractOutput.interface.abi;

  console.log(contractAbi);
}

main();
