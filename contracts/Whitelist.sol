//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {
    uint256 public maxAddresses;

    // Set allowed addresses to true, false otherwise
    mapping(address => bool) public allowedAddresses;

    uint256 public numAddresses;

    constructor(uint256 _maxAddresses) public {
        maxAddresses = _maxAddresses;
    }

    function addAddress() public {
        require(!allowedAddresses[msg.sender], "Address already whitelisted");
        require(numAddresses < maxAddresses, "Whitelist is full");
        allowedAddresses[msg.sender] = true;
        numAddresses++;
    }
}
