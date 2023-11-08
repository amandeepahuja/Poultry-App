import { useState,useEffect } from "react";
import {ethers} from "ethers";
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
<p style={{ textAlign: "center", marginTop: "20px" }}>Searched Entries</p>
{Object.keys(result).map((index)=>{return(
<div className="container-fluid" style={{ width: "100%" }} key={Math.random()}>
    <table style={{marginBottom: "10px",}}>
        <tbody>
            <tr>
                <th>Entity Name</th>
                <th>Details</th>
                <th>Batch ID</th>
                <th>Latitude(*10^-4)</th>
                <th>Longitude(*10^-4)</th>
                <th>Timestamp</th>
                <th>Address</th>
            </tr>
                <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{index}:{String(result[index])}</td>
                <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(index.details)}</td>
                <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(index.lat)}</td>
                    <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(index.long)}</td>
                <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(index.batch)}</td>
                <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{new Date(index.timestamp * 1000).toLocaleString()}</td>
                <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(index.from)}</td>
            </tbody>
            </table>
    </div>
)})}
</>)
};
export default Search;