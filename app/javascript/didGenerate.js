import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';
import * as idManagerWeb3 from './blockchainWeb3/idManagerWeb3.js';
import * as registryWeb3 from './blockchainWeb3/registryWeb3.js';

/*
To create a DecentralizedID:
Deploy AlastriaIdentityManager
call function generateAccessToken
Call function createIdentity
Event LogIdentityCreated identity is the address of the proxy
*/

var identityManagerAbi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"identityKeys","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[{"name":"_identityAttestator","type":"address"}],"name":"getEidasLevel","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"},{"name":"_level","type":"uint8"}],"name":"addIdentityAttestator","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"isIdentityProvider","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transfer","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"addIdentityProvider","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"destination","type":"address"},{"name":"data","type":"bytes"}],"name":"createIdentityWithCall","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_signAddress","type":"address"}],"name":"generateAccessToken","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"removeIdentityProvider","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"}],"name":"removeIdentityAttestator","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"},{"name":"_level","type":"uint8"}],"name":"modifyIdentityAttestatorEidasLevel","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"recoveryKey","type":"address"}],"name":"createIdentity","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[],"name":"createAlastriaIdentity","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"inputs":[{"name":"_version","type":"uint256"}],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"anonymous":false,"inputs":[{"indexed":true,"name":"signAddress","type":"address"}],"name":"AccessTokenGenerated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"method","type":"string"}],"name":"OperationWasNotSupported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"owner","type":"address"}],"name":"LogIdentityCreated","type":"event"}];

var pubKeyRegistryAbi = [{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"deletePublicKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousPublishedVersion","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"revokePublicKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"subject","type":"address"}],"name":"currentPublicKey","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"publicKeyList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"subject","type":"address"},{"name":"publicKey","type":"bytes32"}],"name":"publicKeyStatus","outputs":[{"name":"exists","type":"bool"},{"name":"status","type":"uint8"},{"name":"startDate","type":"uint256"},{"name":"endDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_previousPublishedVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"publicKey","type":"bytes32"}],"name":"PublicKeyDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"publicKey","type":"bytes32"}],"name":"PublicKeyRevoked","type":"event"}];

function initIdentityManager(){
  var version = document.getElementById("initIdentityManager").value;
  var identityManager = idManagerWeb3.deployIdentityManager(version);
}
window.initIdentityManager = initIdentityManager;

async function generateAccessToken(){
  var address = document.getElementById("generateAccessToken").value;
  var identityManager = await bcWeb3.getContractInstance(identityManagerAbi, String(address));
  idManagerWeb3.generateAccessToken(identityManager);
}
window.generateAccessToken = generateAccessToken;

function createAlastriaIdentity(){
  var address = document.getElementById("createAlastriaIdentity").value;
  var identityManager = bcWeb3.getContractInstance(identityManagerAbi, address);
  idManagerWeb3.createAlastriaIdentity(identityManager);
}
window.createAlastriaIdentity = createAlastriaIdentity;

function initPubKeyRegistry(){
  var randomAddress = "0xc0d8f541ab8b71f20c10261818f2f401e8194049";
  var previousPublishedVersion = document.getElementById("initPubKeyRegistry").value;
  var pubKeyRegistry = registryWeb3.deployPubKeyRegistry(String(previousPublishedVersion));
}
window.initPubKeyRegistry = initPubKeyRegistry;

function publishPubKey(pubKey){
  var address = document.getElementById("publishPubKey").value;
  var pubKeyRegistry = bcWeb3.getContractInstance(pubKeyRegistryAbi, address);
  var pubKey = document.getElementById("pubKey").value;
  registryWeb3.set(pubKeyRegistry, pubKey);

}
window.publishPubKey = publishPubKey;
