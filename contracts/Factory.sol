pragma solidity ^0.5.0;
import './Sesame.sol';
contract Factory {
    // address[] public sesames;
    mapping(address => address[]) public ownedSesame;
    address[] sesames;
    
    function createSesame(uint _startDate, uint _endDate, uint _cost) public {
        address sesame = address(new Sesame(msg.sender, _startDate, _endDate, _cost));
        sesames.push(sesame);
    }
    
    function getAllSesameOf(address _owner) public view returns (address[] memory) {
        return ownedSesame[_owner];
    }
    
    function booking(address payable _sesame) public payable {
        Sesame sesame = Sesame(_sesame);
        uint value = sesame.cost();
        require(msg.value >= value * 1 ether);
        _sesame.transfer(msg.value);
        sesame.booking(msg.sender);
        ownedSesame[msg.sender].push(_sesame);
    }
    
    function getAllSesames() public view returns (address[] memory) {
        return sesames;
    }
    
    function() external payable {}
}