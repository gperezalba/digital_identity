const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const idManagerWeb3 = require('./blockchainWeb3/idManagerWeb3.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var identityManagerAddress = "0x4a41672e9a217c3193b12483400b03ce1851e145";

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[0])

module.exports.createAlastriaIdentity = async function(){
  bcWeb3.setDefaultAccount(accounts[0])
  var response = await idManagerWeb3.generateAccessToken(identityManagerAddress, accounts[1])
  bcWeb3.setDefaultAccount(accounts[1])
  idManagerWeb3.listenAccessTokenEvent(identityManagerAddress, accounts[1])
  idManagerWeb3.createAlastriaIdentity(identityManagerAddress)
  idManagerWeb3.listenLogIdentityCreatedEvent(identityManagerAddress, accounts[1])
}

module.exports.events = function(){
  bcWeb3.printEventLog(LogIdentityCreated)
}

require('make-runnable/custom')({
  printOutputFrame: false
})