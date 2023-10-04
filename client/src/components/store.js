import React, { useState } from 'react';
//import {ethers}from "ethers";
//import {BigNumber} from 'Bignumber';
const Store=({state})=>{
    const [userLocation, setUserLocation] = useState(null);
    const getUserLocation = async () => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
          // get the current users location
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // save the geolocation coordinates in two variables
              const { latitude, longitude } = position.coords;
              // update the value of userlocation variable
              setUserLocation({ latitude, longitude });
            },
            // if there was an error getting the users location
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }
        // if geolocation is not supported by the users browser
        else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
    const storeentry=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const entity=document.querySelector("#entity").value;
        const details=document.querySelector("#details").value;
        const batch=document.querySelector("#batch").value;
        console.log(entity,batch,contract)
        const x=await getUserLocation();
        //console.log(userLocation.latitude.toPrecision(5).split('.')[0])
        //console.log(ethers.utils.parseUnits(userLocation.latitude.toPrecision(5).split('.')[0], userLocation.latitude.toPrecision(5).split('.')[1]));
        //console.log(BigNumber.from(userLocation.latitude.toPrecision(5).split('.')[0]).mul(BigNumber.from(10).pow(userLocation.latitude.toPrecision(5).split('.')[1])));
        try{
            let lat=userLocation.latitude.toPrecision(7).split('.')[0]+userLocation.latitude.toPrecision(7).split('.')[1]
            let long=userLocation.longitude.toPrecision(7).split('.')[0]+userLocation.longitude.toPrecision(7).split('.')[1]
            const transaction= await contract.store(entity,details,batch,lat,long)
            await transaction.wait();
            console.log("Transaction is done")
        }
        catch (error){
            console.log(error)
        }
        
    };



    return (<>
    <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={storeentry}>
            <div className="mb-3">
                <label className="form-label">Entity Name</label>
                <input type="text" id="entity" placeholder="Enter Entity name" className="form-control"></input>
                <label className="form-label">Details</label>
                <input type="text" id="details" placeholder="Enter details" className="form-control"></input>
                <label className="form-label">Batch ID</label>
                <input type="number" id="batch" placeholder="Enter batch ID" className="form-control"></input>
            </div>
                <button type="submit" className="btn btn-primary"
                    disabled={!state.contract}>Store</button>
        </form>
    </div>
    </>
    )
};

export default Store;