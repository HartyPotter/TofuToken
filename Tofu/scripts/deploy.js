require("hardhat").ethers;

async function main() {
  const lockedAmount = hre.ethers.utils.parseEther("10000000");

  const TofuToken = await ethers.getContractFactory("TofuToken");
  const tofuToken = await TofuToken.deploy(10000000, 50);

  await tofuToken.deployed();

  console.log(`Laides and Gentelmen, Tofu is now online with a supply of ${ethers.utils.formatEther(lockedAmount)} TOF deployed to ${tofuToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});