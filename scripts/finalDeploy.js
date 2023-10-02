const hre = require("hardhat");

async function main() {
    const [owner, from1,from2,from3]=await hre.ethers.getSigners();
    const PoultryTraceability=await hre.ethers.getContractFactory("PoultryTraceability");
    const contract=await PoultryTraceability.deploy();
  
    // await contract.deployed();
    //const contract=await ethers.deployContract("PoultryTraceability");
    //await contract.waitForDeployment();
    await contract.deployed();
    console.log('Address of contract:',contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  