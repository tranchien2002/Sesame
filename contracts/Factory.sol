pragma solidity ^0.5.0;
import './Sesame.sol';
contract Factory {
    // address[] public sesames;
    mapping(address => address[]) public ownedSesame;
    
    function createSesame(uint _startDate, uint _endDate, uint _cost) public {
        address sesame = address(new Sesame(msg.sender, _startDate, _endDate, _cost));
        ownedSesame[msg.sender].push(sesame);
    }
    
    function getAllSesameOf(address _owner) public view returns (address[] memory) {
        return ownedSesame[_owner];
    }
    
    function() external  {}
}
