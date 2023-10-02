const Store=({state})=>{
    const storeentry=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const entity=document.querySelector("#entity").value;
        const details=document.querySelector("#details").value;
        const batch=document.querySelector("#batch").value;
        console.log(entity,batch,contract)

        const transaction= await contract.store(entity,details,batch)
        await transaction.wait();
        console.log("Transaction is done")

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