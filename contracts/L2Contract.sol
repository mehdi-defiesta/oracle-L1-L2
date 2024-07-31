// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract L2Contract {
    uint256 public data;

    function updateData(uint256 _newData) public {
        data = _newData;
    }
}
