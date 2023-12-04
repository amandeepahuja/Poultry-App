import { useState,useEffect } from "react";
import { saveAs } from 'file-saver';
// let {PythonShell}=require('python-shell')
const Retrieve=({state})=>{
    const [retrieve,setRetrieve]=useState([]);
    const {contract}=state;

    // const retrieveentry=async()=>{
    //     const retrieve=await contract.retrieve();
    //     setRetrieve(retrieve);
    // }

    useEffect(()=>{
        const retrieveentry=async()=>{
            const retrieve=await contract.retrieve();
        //     let entry_string="{"
        //     for(let i=0;i<retrieve.length;i++){
            
        //     entry_string=entry_string+i+":["
        //     entry_string=entry_string+retrieve[i].entity+","+retrieve[i].details+","+retrieve[i].lat+","+retrieve[i].long+","+retrieve[i].batch+","+retrieve[i].from+","+retrieve[i].timestamp;
        //     if (i==retrieve.length-1) {entry_string=entry_string+"]\n"}
        //     else {entry_string=entry_string+"],\n"}
            
        // }
        // entry_string=entry_string+"}"
        //     const file = new Blob([entry_string], { type: 'text/plain;charset=utf-8' });
        //     saveAs(file,"./entries.txt");
            fetch('http://localhost:5000/store',{
                "method": "POST",
                "headers": {"Content-Type": "application/json"},
                "body": JSON.stringify(retrieve),
            }).then((res)=>console.log(res))
            
            console.log(retrieve)
            setRetrieve(retrieve);
        };
        contract && retrieveentry();

    },[contract]);



return(<>

<h3 class="fw-bolder text-center my-3">Entries</h3>
<table class="centerTable" >
            <tr>
                <th>Entity Name</th>
                <th>Details</th>
                <th>Batch ID</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Timestamp</th>
                <th>Address</th>
            </tr>
{retrieve.map((entry)=>{return(
            <tr>
                <td style={{
                      backgroundColor: "#EB8C00",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(entry.entity)}</td>
                <td style={{
                      backgroundColor: "#EB8C00",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(entry.details)}</td>
                <td style={{
                      backgroundColor: "#EB8C00",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(entry.batch)}</td>
                <td style={{
                      backgroundColor: "#EB8C00",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(entry.lat)}</td>
                <td style={{
                      backgroundColor: "#EB8C00",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(entry.long)}</td>
                
                <td style={{
                      backgroundColor: "#EB8C00",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{new Date(entry.timestamp * 1000).toLocaleString()}</td>
                <td style={{
                      backgroundColor: "#EB8C00",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}>{String(entry.from)}</td>
            </tr>
)})}
    </table>
    


</>
);
};
export default Retrieve;