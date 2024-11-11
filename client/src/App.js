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
      const contractAddress="0x66A3588086619717E1D43CdEFE44ea8F9971c59f";
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
    <div style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <div class="topnav">
        <br></br>
        <br></br>
        <h2 class="fw-bolder my-3">Supply Chain Transparency using Blockchain</h2>
      </div>
        
      </p>

    <div class="row justify-content-center">
    <div class="col-sm-8 col-lg-6 col-xl-4 border border-5 rounded shadow mt -5 p-5" style={{ backgroundColor: "#DEDEDE", height: "100%" }}>
    <h3 class="fw-bolder text-center my-3">Connected Account<br></br></h3>
        <h4>{account}</h4>
    <Store state={state}></Store>
    <Search state={state}></Search>
    </div>
    <Retrieve state={state}></Retrieve>

  </div>
  </div>
  </div>);
}

export default App;
