const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const idManagerWeb3 = require('./blockchainWeb3/idManagerWeb3.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var identityManagerAddress = "0x9cca28d98ec895c50c266b7f138dd6316aadb52a";
var publicKeyRegistryAddress = "0xe6042703475d0dd1bc2eb564a55f1832c2527171";
var alastriaID = "0x110ec818d2406161abfc8c070e331b1012234448"

var accounts = bcWeb3.getAccounts();
bcWeb3.setDefaultAccount(accounts[0])

module.exports.createAlastriaIdentity = async function(){
  var idName = readlineSync.question("Enter ID name: ");
  dir = './../ids/' + idName;
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    fs.mkdirSync(dir + '/attestations');
    fs.mkdirSync(dir + '/claims');
    fs.mkdirSync(dir + '/did');
  }
  bcWeb3.setDefaultAccount(accounts[0])
  var response = await idManagerWeb3.generateAccessToken(identityManagerAddress, accounts[2])
  bcWeb3.setDefaultAccount(accounts[1])
  idManagerWeb3.listenAccessTokenEvent(identityManagerAddress, accounts[2])
  var pubKey = "0x1111000000000000000000000000000000000000000000000000000000000000"; //leer de /did/publicKey.pem y hacer el hash(?)
  idManagerWeb3.createIdentityWithCall(identityManagerAddress, accounts[2], publicKeyRegistryAddress, pubKey)
  idManagerWeb3.listenLogIdentityCreatedEvent(identityManagerAddress, accounts[2], idName)
}

module.exports.event = function(){
  idManagerWeb3.listenForwardedEvent(alastriaID)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
