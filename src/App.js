import './App.css';
import { useConnect, useDisconnect, useAccount, useNetwork } from "wagmi";


function App() {
  const { data: accountData } = useAccount();
  const { connect, connectors, isConnected } = useConnect();
  const { disconnect } = useDisconnect();
  const { activeChain } = useNetwork();
  
  return (
    <div className="App">
      <button onClick={() => { connect({ connector: connectors[0] }) }}>Coinbase Wallet</button>
      <button onClick={() => { connect({ connector: connectors[1] }) }}>Wallet Connect</button>
      <button onClick={() => { connect({ connector: connectors[2] }) }}>Metamask</button>

      <button onClick={disconnect}>Disconnect</button>

      <div>Connection Status: ${isConnected}</div>
      <div>Account: ${accountData.address}</div>
      <div>Network ID: ${activeChain.id}</div>
    </div>
  );
}


export default App;
