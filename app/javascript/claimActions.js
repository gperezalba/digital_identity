const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const claimRegistryWeb3 = require('./blockchainWeb3/claimRegistryWeb3.js');
const addresses = require('./AddressesAndAbis/addresses.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var claimRegistryAddress = addresses.claimRegistryAddress();
var alastriaID = addresses.proxyAddress();

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[1])

module.exports.set = function(dataHash, uri){
  claimRegistryWeb3.set(attestationRegistryAddress, dataHash, uri, alastriaID)
}

module.exports.subjectUpdateClaim = async function(dataHash, status){
  var response = await claimRegistryWeb3.subjectUpdateClaim(attestationRegistryAddress, dataHash, status, alastriaID)
  console.log(response)
}

module.exports.subjectClaimStatus = async function(dataHash, subject){
  var response = await claimRegistryWeb3.subjectClaimStatus(attestationRegistryAddress, dataHash, subject)
  console.log(response)
}

module.exports.subjectClaimList = async function(){
  var response = await claimRegistryWeb3.subjectClaimList(attestationRegistryAddress, alastriaID)
  console.log(response)
}

module.exports.receiverUpdateClaim = function(dualHash, status){
  claimRegistryWeb3.receiverUpdateClaim(attestationRegistryAddress, dualHash, status, alastriaID)
}

module.exports.receiverClaimStatus = async function(issuer, dualHash){
  var response = await claimRegistryWeb3.receiverClaimStatus(attestationRegistryAddress, issuer, dualHash)
  console.log(response)
}

module.exports.claimStatus = async function(subjectStatus, receiverStatus){
  var response = await claimRegistryWeb3.claimStatus(attestationRegistryAddress, subjectStatus, receiverStatus)
  console.log(response)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
