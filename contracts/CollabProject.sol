// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract CollabProject {

  struct Project {
    string name;
    address[] members;
    string description;
  }

  mapping (uint => Project) public projects;

  function createProject(string memory _name, string memory _description) public {
    projects[projectIdCount] = Project(_name, new address[](0), _description);
    projectIdCount++;
  }

  function addMember(uint _projectId, address _member) public {
    projects[_projectId].members.push(_member);
  }

  uint projectIdCount;

}