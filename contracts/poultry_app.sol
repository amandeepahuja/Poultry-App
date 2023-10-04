// SPDX-License-Identifier: GPL-3.0 
pragma solidity >=0.8.0 <0.9.0; 

contract PoultryTraceability {
    struct PoultryBatch {
        string entity;
        string details;
        string lat;
        string long;
        uint256 batch;
        uint256 timestamp;
        address from;
    }
    
    PoultryBatch [] public poultrybatch;

    function store(string memory _entity, string memory _details, string memory _lat,string memory _long,uint _batch) public {
        poultrybatch.push(PoultryBatch(_entity, _details, _lat, _long,_batch, block.timestamp ,msg.sender));
    }


    function retrieve() public view returns (PoultryBatch[] memory)
    {
        return poultrybatch;
    }
}
