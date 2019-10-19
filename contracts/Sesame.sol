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
    
    function booking(address _renter) public emptyRoom() payable {
        renter = _renter;
    }

    function getLock() view public returns (bool) {
        return lock;
    }

    function getRenter() view public returns (address) {
        return renter;
    }

    function getStartDate() view public returns (uint) {
        return startDate;
    }

    function getEndDate() view public returns (uint) {
        return endDate;
    }

    function() external payable {}
}