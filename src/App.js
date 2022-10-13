import './App.css';
import { ethers } from "ethers";

// let abi = require("./utils/abi.json");

let address = "0xfa4b9CC7B6D90BA49414499C3bfA8a80e1dfc5c7"

const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/80a535d1df06480bb8d03267a0b2fcdc")

const erc20_abi = [
  "function decimals() view returns (uint256)",
]

let contract = new ethers.Contract(address, erc20_abi, provider)

async function App() {
  const decimals = await contract.decimals();

  await decimals.deployed();

  return (
    {decimals}
  );
}

export default App;
