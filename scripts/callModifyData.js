require('dotenv').config();
const { ethers } = require('ethers');

// Load environment variables
const {
    SEPOLIA_PROVIDER_URL,
    PRIVATE_KEY,
    L1_CONTRACT_ADDRESS
} = process.env;

// ABI of the L1 contract
const L1_ABI = [
    "function modifyData(uint256 _newData) public"
];

// Provider
const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_PROVIDER_URL);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// Contract instance
const l1Contract = new ethers.Contract(L1_CONTRACT_ADDRESS, L1_ABI, signer);

// Function to call modifyData
async function callModifyData(newData) {
    try {
        const tx = await l1Contract.modifyData(newData);
        console.log(`Transaction hash: ${tx.hash}`);
        await tx.wait();
        console.log(`Transaction confirmed. Data modified to: ${newData}`);
    } catch (error) {
        console.error(`Failed to modify data: ${error}`);
    }
}

// Call the function with a sample data
callModifyData(50);
