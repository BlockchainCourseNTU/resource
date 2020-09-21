const Bank = artifacts.require("Bank");

module.exports = function (deployer) {
  deployer.deploy(Bank);
};
