var GCHToken = artifacts.require("./GCHToken.sol");
var GCHTokenSale = artifacts.require("./GCHTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(GCHToken, 42000000).then(function() {
    // Token price is 0.002 Ether
    var tokenPrice = 2000000000000000;//wei
    return deployer.deploy(GCHTokenSale, GCHToken.address, tokenPrice);
  });
};
