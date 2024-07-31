require('dotenv').config();
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying L2Contract with the account:", deployer.address);

    const L2Contract = await ethers.getContractFactory("L2Contract");
    const l2Contract = await L2Contract.deploy();
    await l2Contract.deployed();
    console.log("L2Contract deployed to:", l2Contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
