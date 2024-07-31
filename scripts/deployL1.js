require('dotenv').config();
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying L1Contract with the account:", deployer.address);

    const L1Contract = await ethers.getContractFactory("L1Contract");
    const l1Contract = await L1Contract.deploy();
    await l1Contract.deployed();
    console.log("L1Contract deployed to:", l1Contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
