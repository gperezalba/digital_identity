const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const registryWeb3 = require('./blockchainWeb3/registryWeb3.js');
const idManagerWeb3 = require('./blockchainWeb3/idManagerWeb3.js');
const claimRegistryWeb3 = require('./blockchainWeb3/claimRegistryWeb3.js');
const attestationRegistryWeb3 = require('./blockchainWeb3/attestationRegistryWeb3.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[0])

module.exports.publicKeyRegistry = function(prevVersion){
  registryWeb3.deployPubKeyRegistry(prevVersion)
}

module.exports.claimRegistry = function(prevVersion){
  claimRegistryWeb3.deployClaimRegistry(prevVersion)
}

module.exports.attestationRegistry = function(prevVersion){
  attestationRegistryWeb3.deployAttestationRegistry(prevVersion)
}

module.exports.identityManager = function(version){
  idManagerWeb3.deployIdentityManager(version)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
