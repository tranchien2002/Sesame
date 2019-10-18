pragma solidity ^0.5.0;

contract AccessControl {
    address payable public ownerAddress;

    constructor() public {
        ownerAddress = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddress, "sender must be ceo");
        _;
    }

    function setOwner(address payable _newOwner) external onlyOwner {
        require(_newOwner != address(0),"New ceo must be different from '0x0'");
        ownerAddress = _newOwner;
    }
}
