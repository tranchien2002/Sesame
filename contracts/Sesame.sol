pragma solidity ^0.5.0;
import './AccessControl.sol';
contract Sesame is AccessControl {
    uint public cost;
    uint public startDate;
    uint public endDate;
    address public renter;
    // address[] lockKeeper;
    bool public lock = true;    
    constructor(address payable _ownerAddress, uint _startDate, uint _endDate, uint _cost) public {
        ownerAddress = _ownerAddress;
        startDate = _startDate;
        endDate = _endDate;
        cost = _cost;
        renter = address(0x0);
    }
    
    modifier unexpired() {
        require(now >= startDate, "must be after start date");
        require(now <= endDate, "must be before end date");
        _;
    }
    
    modifier onlyRenter() {
        require(msg.sender == renter);
        _;
    }
    
    modifier emptyRoom() {
        require(renter == address(0x0));
        _;
    }
    
    function changeLock() public onlyRenter() unexpired() {
        lock = !lock;
    }
    
    function booking() public emptyRoom() payable {
        require(msg.value >= cost * 1 ether);
        renter = msg.sender;
    }

}