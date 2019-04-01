const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const attestationRegistryWeb3 = require('./blockchainWeb3/attestationRegistryWeb3.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var attestationRegistryAddress = addresses.attestationRegistryAddress();
var alastriaID = addresses.proxyAddress();

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[1])

module.exports.set = function(){
  var dataHash = "0x1234"
  var uri = "www.ugr.es"
  attestationRegistryWeb3.set(attestationRegistryAddress, dataHash, uri, alastriaID)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
