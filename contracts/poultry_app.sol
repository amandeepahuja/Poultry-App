// SPDX-License-Identifier: GPL-3.0 
pragma solidity >=0.8.0 <0.9.0; 

contract PoultryTraceability {
    struct PoultryBatch {
        string entity;
        string details;
        uint batch;
        uint timestamp;
        address from;
    }
    
    PoultryBatch [] public poultrybatch;

    function store(string memory _entity, string memory _details, uint _batch) public {
        poultrybatch.push(PoultryBatch(_entity, _details,_batch,block.timestamp,msg.sender));
    }


    function retrieve() public view returns (PoultryBatch[] memory)
    {
        return poultrybatch;
    }
}
