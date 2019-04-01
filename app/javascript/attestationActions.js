const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const attestationRegistryWeb3 = require('./blockchainWeb3/attestationRegistryWeb3.js');
const addresses = require('./AddressesAndAbis/addresses.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var attestationRegistryAddress = addresses.attestationRegistryAddress();
var alastriaID = addresses.proxyAddress();

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[1])

module.exports.set = function(dataHash, uri){
  attestationRegistryWeb3.set(attestationRegistryAddress, dataHash, uri, alastriaID)
}

module.exports.deleteAttestation = function(dataHash){
  attestationRegistryWeb3.deleteAttestation(attestationRegistryAddress, dataHash, alastriaID)
}

module.exports.subjectAttestationStatus = function(subject, dataHash){
  attestationRegistryWeb3.subjectAttestationStatus(attestationRegistryAddress, subject, dataHash)
}

module.exports.subjectAttestationList = async function(){
  var response = attestationRegistryWeb3.subjectAttestationList(attestationRegistryAddress, dataHash)
  console.log(response)
}

module.exports.revokeAttestation = function(revHash, status){
  attestationRegistryWeb3.revokeAttestation(attestationRegistryAddress, revHash, status, alastriaID)
}

module.exports.issuerRevocationStatus = async function(issuer, revHash){
  var response = attestationRegistryWeb3.issuerRevocationStatus(attestationRegistryAddress, issuer, revHash)
  console.log(response)
}

module.exports.attestationStatus = async function(subjectStatus, issuerStatus){
  var response = attestationRegistryWeb3.attestationStatus(attestationRegistryAddress, subjectStatus, issuerStatus)
  console.log(response)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
