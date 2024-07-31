// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract L1Contract {
    uint256 public data;
    event DataModified(uint256 newData);

    function modifyData(uint256 _newData) public {
        data = _newData;
        emit DataModified(_newData);
    }
}
