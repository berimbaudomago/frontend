const { ethers } = require("ethers");

let x;

async function main() {

    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    const ConnectedContract = new ethers.getContractAt("SimpleBet", "0x473bC3bd264d4a927a2730717a22C4e02E92DD9e");
    x = await ConnectedContract.owner();

    console.log("end = ", x);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

module.exports =  x;