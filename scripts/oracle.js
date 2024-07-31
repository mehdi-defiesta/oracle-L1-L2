require('dotenv').config();
const { ethers } = require('ethers');

// Load environment variables
const {
    SEPOLIA_PROVIDER_URL,
    OPTIMISM_SEPOLIA_PROVIDER_URL,
    PRIVATE_KEY,
    L1_CONTRACT_ADDRESS,
    L2_CONTRACT_ADDRESS
} = process.env;

// ABI of the L1 contract
const L1_ABI = [
    "event DataModified(uint256 newData)"
];

// ABI of the L2 contract
const L2_ABI = [
    "function updateData(uint256 _newData) public"
];

// Providers
const l1Provider = new ethers.providers.JsonRpcProvider(SEPOLIA_PROVIDER_URL);
const l2Provider = new ethers.providers.JsonRpcProvider(OPTIMISM_SEPOLIA_PROVIDER_URL);

// Signer for L2 (must have private key with funds on L2)
const l2Signer = new ethers.Wallet(PRIVATE_KEY, l2Provider);

// Contract instances
const l1Contract = new ethers.Contract(L1_CONTRACT_ADDRESS, L1_ABI, l1Provider);
const l2Contract = new ethers.Contract(L2_CONTRACT_ADDRESS, L2_ABI, l2Signer);

// Listen to events from L1 and update L2
l1Contract.on("DataModified", async (newData) => {
    console.log(`DataModified event detected: ${newData}`);
    try {
        const tx = await l2Contract.updateData(newData);
        await tx.wait();
        console.log(`L2 data updated to: ${newData}`);
    } catch (error) {
        console.error(`Failed to update L2 data: ${error}`);
    }
});

console.log("Oracle is listening for events...");
