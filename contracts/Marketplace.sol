// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Marketplace {
    enum State {
        Purchased,
        Activated,
        Deactivated
    }

    // mapping of the courseHash to Course data
    mapping(bytes32 => Course) private ownedCourses;
    // mapping o courseID to courseHash
    mapping(uint => bytes32) private ownedCourseHash;
    // number of all courses + id of the course
    uint private totalOwnedCourses;

    //Note - the three lines will provide the error message that described
    /// Course has already a Owner
    error CourseHasOwner();

    struct Course {
        uint id; //32 bytes
        uint price; // 32 bytes
        bytes32 proof; // 32 bytes
        address owner; // 20 bytes
        State state; // 1 byte
    }

    function purchaseCourse(
        bytes16 courseId,
        bytes32 proof // 0x0000000000000000000000000000313000000000000000000000000000003130
    ) external payable {
        /**
            Exmaple: 
            courseId = 10 --> ASCII text to Hex --> 3130 Hex
            0x00000000000000000000000000003130
            0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 --> Remix address where from contract deployed
            000000000000000000000000000031305B38Da6a701c568545dCfcB03FcB875f56beddC4
            Keccak256 - c4eaa3558504e2baa2669001b43f359b8418b44a4477ff417b4b007d7cc86e37
            Decoded Output - 0xc4eaa3558504e2baa2669001b43f359b8418b44a4477ff417b4b007d7cc86e37 
         */

        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));

        if (hasCourseOwnership(courseHash)) {
            revert CourseHasOwner();
        }

        uint id = totalOwnedCourses++;

        // TODO:1 Currently the courses are overriden - id changes but the hash is the same
        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function getCourseCount() external view returns (uint) {
        return totalOwnedCourses;
    }

    function getCourseHashAtIndex(uint index) external view returns (bytes32) {
        return ownedCourseHash[index];
    }

    function getCourseByHash(
        bytes32 courseHash
    ) external view returns (Course memory) {
        return ownedCourses[courseHash];
    }

    //FIXED: TODO1
    function hasCourseOwnership(
        bytes32 courseHash
    ) private view returns (bool) {
        return ownedCourses[courseHash].owner == msg.sender;
    }
}
