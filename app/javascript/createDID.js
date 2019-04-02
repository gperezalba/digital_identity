const fs = require('fs');
var readlineSync = require('readline-sync');
const bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
const idManagerWeb3 = require('./blockchainWeb3/idManagerWeb3.js');
const addresses = require('./AddressesAndAbis/addresses.js');
const keys = require('./createKeys.js');
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
  keys.generate(idName);
  console.log(accounts)
  var ownerAcc = readlineSync.question("Enter owner account: ");
  bcWeb3.setDefaultAccount(accounts[0])
  var response = await idManagerWeb3.generateAccessToken(identityManagerAddress, ownerAcc)
  bcWeb3.setDefaultAccount(ownerAcc)
  idManagerWeb3.listenAccessTokenEvent(identityManagerAddress, ownerAcc)
  var publicKeyData = fs.readFileSync('./../ids/' + idName + '/did/publicKey.pem', 'utf8');
  var pubKey = bcWeb3.keccak256sha3(publicKeyData)
  //var pubKey = "0x1111000000000000000000000000000000000000000000000000000000000000";
  idManagerWeb3.createIdentityWithCall(identityManagerAddress, ownerAcc, publicKeyRegistryAddress, pubKey)
  idManagerWeb3.listenLogIdentityCreatedEvent(identityManagerAddress, ownerAcc, idName)
}

require('make-runnable/custom')({
  printOutputFrame: false
})
