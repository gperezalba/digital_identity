/*
To create a DecentralizedID:
Deploy AlastriaIdentityManager
call function generateAccessToken
Call function createIdentity
Event LogIdentityCreated identity is the address of the proxy
*/

import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';
import * as idManagerWeb3 from './blockchainWeb3/idManagerWeb3.js';
import * as registryWeb3 from './blockchainWeb3/registryWeb3.js';

let contractPath = './../../contracts/newIdentityManager/AlastriaIdentityManager.sol';
let contractName = 'AlastriaIdentityManager';

let didModel = {

}

function generate(){
  var defaultAccount = bcWeb3.getDefaultAccount();
  var identityManager = idManagerWeb3.deployIdentityManager(1);
  idManagerWeb3.generateAccessToken(identityManager);
  idManagerWeb3.createAlastriaIdentity(identityManager);
  return
}

function initPubKeyRegistry(previousPublishedVersion){
  var pubKeyRegistry = registryWeb3.deployPubKeyRegistry(previousPublishedVersion);
}

function publishPubKey(address, pubKey){
  var pubKeyRegistryAbi = [{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"deletePublicKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousPublishedVersion","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"revokePublicKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"subject","type":"address"}],"name":"currentPublicKey","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"publicKeyList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"subject","type":"address"},{"name":"publicKey","type":"bytes32"}],"name":"publicKeyStatus","outputs":[{"name":"exists","type":"bool"},{"name":"status","type":"uint8"},{"name":"startDate","type":"uint256"},{"name":"endDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_previousPublishedVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"publicKey","type":"bytes32"}],"name":"PublicKeyDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"publicKey","type":"bytes32"}],"name":"PublicKeyRevoked","type":"event"}];
  var pubKeyRegistry = bcWeb3.getContractInstance(pubKeyRegistryAbi, address);
  registryWeb3.set(pubKeyRegistry, pubKey);

}
