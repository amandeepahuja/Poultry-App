// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function consolePoultry(poultrybatch){
  for(const poultry of poultrybatch){
    const timestamp=poultry.timestamp;
    const entity=poultry.entity;
    const batch=poultry.batch;
    const details=poultry.details;
    const from=poultry.from;
  console.log(`At ${timestamp}, entity ${entity} , details ${details}, address ${from}, batch ${batch}`);
  }
}
async function main() {
  const [owner, from1,from2,from3]=await hre.ethers.getSigners();
  const PoultryTraceability=await hre.ethers.getContractFactory("PoultryTraceability");
  const contract=await PoultryTraceability.deploy();

  // await contract.deployed();
  //const contract=await hre.ethers.deployContract("PoultryTraceability");
  await contract.waitForDeployment();
  console.log('Address of contract:',contract.target);

  await contract.connect(from1).store("a","a",1);
  await contract.connect(from2).store("b","b",1);
  await contract.connect(from3).store("c","c",1);

  const array=await contract.connect(from1).retrieve();
  consolePoultry(array);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
