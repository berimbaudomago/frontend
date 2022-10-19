import './App.css';
import Main from './services/main';
import NavigationBar from './services/navbar';
import Ethers from './services/ethers';


function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Ethers></Ethers>
      <Main></Main>
      <div className="App">
        <header className="App-header">
          <p>
            PlaceHolder
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
