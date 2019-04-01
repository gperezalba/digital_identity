const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const idManagerWeb3 = require('./blockchainWeb3/idManagerWeb3.js');
const addresses = require('./AddressesAndAbis/addresses.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var identityManagerAddress = addresses.identityManagerAddress();
var publicKeyRegistryAddress = addresses.publicKeyRegistryAddress();

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
  var response = await idManagerWeb3.generateAccessToken(identityManagerAddress, accounts[1])
  bcWeb3.setDefaultAccount(accounts[1])
  idManagerWeb3.listenAccessTokenEvent(identityManagerAddress, accounts[1])
  var pubKey = "0x1111000000000000000000000000000000000000000000000000000000000000"; //leer de /did/publicKey.pem y hacer el hash(?)
  idManagerWeb3.createIdentityWithCall(identityManagerAddress, accounts[1], publicKeyRegistryAddress, pubKey)
  idManagerWeb3.listenLogIdentityCreatedEvent(identityManagerAddress, accounts[1], idName)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
