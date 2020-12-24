pragma solidity >=0.5.16 <0.8.0;

/// @title Goal2021
/*
/// @notice Allows user to store goal for 2021 which can't be changed.
    Also allows user to store lucky number.
*/
contract Goal2021 {
    mapping(address => string) private goalsFor2021;
    mapping(address => uint) private luckyNum;
    uint randNonce = 0;
    
    modifier OwnerOf(address _address) {
        require(_address == msg.sender);
        _;
    }
    
    /// @notice Set your goal one time.
    /// @param _goal string which contains goal
    function setMyGoal(string calldata _goal) external {
        require (bytes(goalsFor2021[msg.sender]).length == 0);
        goalsFor2021[msg.sender] = _goal;
    }
    
    /// @notice Set your lucky num
    function setMyLuckyNum(uint _num) external {
        luckyNum[msg.sender] = _num;
    }
    
  
    /// @notice Return your goal
    function getMyGoal(address _owner) external view  returns (string memory) {
        return goalsFor2021[_owner];
    }
    
    /// @notice Return your lucky number
    function getMyLuckyNum(address _owner) external view  returns (uint) {
        return luckyNum[_owner];
    }
    
    
}