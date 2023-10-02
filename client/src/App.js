import {useState,useEffect} from 'react';
import abi from "./contract/PoultryTraceability.json";
import {ethers} from "ethers";
import './App.css';
import Store from './components/store';
import Retrieve from './components/retrieve';


function App() {
  const[state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  });
  const [account, setAccount] = useState("None");
  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress="0x34D848143ca982931dfF615D2393f2026eacd703";
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
    <Retrieve state={state}></Retrieve>
    </div>
  </div>);
}

export default App;
