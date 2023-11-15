var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var CollabProject = artifacts.require("./CollabProject.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(CollabProject);
};
