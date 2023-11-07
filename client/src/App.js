import {useState,useEffect} from 'react';
import abi from "./contract/PoultryTraceability.json";
import {ethers} from "ethers";
import './App.css';
import Store from './components/store';
import Retrieve from './components/retrieve';
import Search from './components/search';


function App() {
  const[state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  });
  const [account, setAccount] = useState("None");
  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress="0xcB8A5cC914b2e6d43Fe31f6965f69E6034FF67F8";
      const contractABI=abi.abi;
      try{
        const {ethereum}=window;

        if (ethereum){
          const account=await ethereum.request({method:"eth_requestAccounts",});
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
        
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractABI,signer);
        setAccount(account)
        setState({provider,signer,contract})
      }
      else{
        alert("Please install metamask");
      }
    }
    catch(error){
        console.log(error)
      }
    };
    connectWallet();
  },[]);

  //console.log(state)

  return (<div className="App">
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <p
        class="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <small>Connected Account - {account}</small>
      </p>
      <div className="container"></div>
    <Store state={state}></Store>
    <Search state={state}></Search>
    <Retrieve state={state}></Retrieve>
    </div>
  </div>);
}

export default App;
