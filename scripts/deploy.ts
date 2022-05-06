import { ethers } from "hardhat";

async function main() {
  const whiteListContract = await ethers.getContractFactory("Whitelist");
  // Deploy contract with limit as argument
  const deployedWhitelistContract = await whiteListContract.deploy(10);
  await deployedWhitelistContract.deployed();
  console.log("Deployed contract address:", deployedWhitelistContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
