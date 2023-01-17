async function main() {
  // To lay hold on the contract factory 
  const Smart_Transcript = await ethers.getContractFactory("Smart_Transcript");

  // Start deployment, and return a promise that resolves to Smart_Transcript contract object
  const smart_transcript = await Smart_Transcript.deploy(); // Instance of the contract 
  console.log("The Smart_Transcript contract has been deployed to address:", smart_transcript.address);


  console.log("Waiting....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(200000);


  // Verify the Smart_Transcript contract after deploying
  await hre.run("verify:verify", {
    contract: "contracts/Smart_Transcript.sol:Smart_Transcript",
    address: Smart_Transcript.address,
    constructorArguments: [],
  });
  console.log("Verified Smart_Transcript ")
}


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });



 // This was run using the command
 // npx hardhat run scripts/deploy.js --network goerli