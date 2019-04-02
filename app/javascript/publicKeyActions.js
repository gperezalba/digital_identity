const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const registryWeb3 = require('./blockchainWeb3/registryWeb3.js');
const addresses = require('./AddressesAndAbis/addresses.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var publicKeyRegistryAddress = addresses.publicKeyRegistryAddress();

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[0])

module.exports.set = function(pubKey){
  var idName = readlineSync.question("Enter ID name: ");
  var data = JSON.parse(fs.readFileSync('./../ids/' + idName + '/did/alastriaID.json', 'utf8'));
  var from = data["owner"]
  var alastriaID = data["identity"]
  registryWeb3.set(publicKeyRegistryAddress, pubKey, alastriaID, from)
}

module.exports.revokePublicKey = function(pubKey){
  var idName = readlineSync.question("Enter ID name: ");
  var data = JSON.parse(fs.readFileSync('./../ids/' + idName + '/did/alastriaID.json', 'utf8'));
  var from = data["owner"]
  var alastriaID = data["identity"]
  registryWeb3.revokePublicKey(publicKeyRegistryAddress, pubKey, alastriaID, from)
}

module.exports.deletePublicKey = function(pubKey){
  var idName = readlineSync.question("Enter ID name: ");
  var data = JSON.parse(fs.readFileSync('./../ids/' + idName + '/did/alastriaID.json', 'utf8'));
  var from = data["owner"]
  var alastriaID = data["identity"]
  registryWeb3.deletePublicKey(publicKeyRegistryAddress, pubKey, alastriaID, from)
}

module.exports.currentPublicKey = async function(subject){
  var response = registryWeb3.currentPublicKey(publicKeyRegistryAddress, subject)
  console.log(response)
}

module.exports.publicKeyStatus = async function(subject, pubKey){
  var response = registryWeb3.publicKeyStatus(publicKeyRegistryAddress, subject, pubKey)
  console.log(response)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
