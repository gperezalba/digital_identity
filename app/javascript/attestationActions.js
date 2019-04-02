const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const attestationRegistryWeb3 = require('./blockchainWeb3/attestationRegistryWeb3.js');
const addresses = require('./AddressesAndAbis/addresses.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var attestationRegistryAddress = addresses.attestationRegistryAddress();

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[1])

module.exports.set = function(){
  var idName = readlineSync.question("Enter ID name: ");
  var data = JSON.parse(fs.readFileSync('./../ids/' + idName + '/did/alastriaID.json', 'utf8'));
  var from = data["owner"]
  var alastriaID = data["identity"]
  var dataHash = readlineSync.question("Enter dataHash: ");
  var uri = readlineSync.question("Enter URI: ");
  attestationRegistryWeb3.set(attestationRegistryAddress, dataHash, uri, alastriaID, from)
}

module.exports.deleteAttestation = function(){
  var idName = readlineSync.question("Enter ID name: ");
  var data = JSON.parse(fs.readFileSync('./../ids/' + idName + '/did/alastriaID.json', 'utf8'));
  var from = data["owner"]
  var alastriaID = data["identity"]
  var dataHash = readlineSync.question("Enter dataHash: ");
  attestationRegistryWeb3.deleteAttestation(attestationRegistryAddress, dataHash, alastriaID, from)
}

module.exports.subjectAttestationStatus = function(){
  var subject = readlineSync.question("Enter subject: ");
  var dataHash = readlineSync.question("Enter dataHash: ");
  attestationRegistryWeb3.subjectAttestationStatus(attestationRegistryAddress, subject, dataHash)
}

module.exports.subjectAttestationList = async function(){
  var dataHash = readlineSync.question("Enter dataHash: ");
  var response = attestationRegistryWeb3.subjectAttestationList(attestationRegistryAddress, dataHash)
  console.log(response)
}

module.exports.revokeAttestation = function(){
  var idName = readlineSync.question("Enter ID name: ");
  var data = JSON.parse(fs.readFileSync('./../ids/' + idName + '/did/alastriaID.json', 'utf8'));
  var from = data["owner"]
  var alastriaID = data["identity"]
  var revHash = readlineSync.question("Enter revHash: ");
  var status = readlineSync.question("Enter status: ");
  attestationRegistryWeb3.revokeAttestation(attestationRegistryAddress, revHash, status, alastriaID, from)
}

module.exports.issuerRevocationStatus = async function(){
  var revHash = readlineSync.question("Enter revHash: ");
  var issuer = readlineSync.question("Enter issuer: ");
  var response = attestationRegistryWeb3.issuerRevocationStatus(attestationRegistryAddress, issuer, revHash)
  console.log(response)
}

module.exports.attestationStatus = async function(){
  var subjectStatus = readlineSync.question("Enter subjectStatus: ");
  var issuerStatus = readlineSync.question("Enter issuerStatus: ");
  var response = attestationRegistryWeb3.attestationStatus(attestationRegistryAddress, subjectStatus, issuerStatus)
  console.log(response)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
