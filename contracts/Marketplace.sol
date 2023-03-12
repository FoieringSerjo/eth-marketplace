// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Marketplace {
    enum State {
        Purchased,
        Activated,
        Deactivated
    }

    struct Course {
        uint id; //32 bytes
        uint price; // 32 bytes
        bytes32 proof; // 32 bytes
        address owner; // 20 bytes
        State state; // 1 byte
    }
}
