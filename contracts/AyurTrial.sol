pragma solidity ^0.5.0;

contract AyurTrial {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }

    function hello() public pure returns (string memory) {
        return "Hello World!";
    }
}
