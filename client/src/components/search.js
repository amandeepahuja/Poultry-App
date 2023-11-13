import { useState,useEffect } from "react";
import {ethers} from "ethers";
import MyImage from './myqr_new.jpg'
// import raw from './entries.txt'; // The relative path to your File
// console.log(text);
const Search=({state})=>{
    const [result,setSearch]=useState([]);
    const {contract}=state;
    // useEffect(()=>{
        const searchentry=async(event)=>{
            event.preventDefault();
            let result;
            const batchid=document.querySelector("#batchid").value;

            fetch('http://localhost:5000/search',{
                "method": "POST",
                "headers": {"Content-Type": "application/json"},
                "body": batchid,
            }).then((result)=>console.log(result.json()))

            
            // console.log({temp})
            // setSearch(result);
            }; 
        // },[contract]);




return (<>
<div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={searchentry}>
            <div className="mb-3">
                <label >Enter the Batch ID to be searched</label>
                <input type="number" id="batchid" placeholder="Enter Batch ID"></input>
            </div>
            <button type="submit" className="btn btn-primary"
                    disabled={!state.contract}>Search</button> 
            </form>
</div>
<div class="div-img">
    <img src={MyImage} style={{marginRight: '4px'} } width="300" height="300"></img>
</div>

</>)
};
export default Search;