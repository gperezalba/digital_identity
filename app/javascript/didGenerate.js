import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';
import * as idManagerWeb3 from './blockchainWeb3/idManagerWeb3.js';
import * as registryWeb3 from './blockchainWeb3/registryWeb3.js';

//*************GENERAL

function getAccountN(){
  var n = document.getElementById("getAccountN").value;
  var acc = bcWeb3.getAccounts();
  document.getElementById("accountN").value = acc[n];
}
window.getAccountN = getAccountN;

function getDefaultAccount(){
  var def = bcWeb3.getDefaultAccount();
  document.getElementById("getDefaultAccount").value = def;
}
window.getDefaultAccount = getDefaultAccount;

function setDefaultAccount(){
  var def = document.getElementById("setDefaultAccount").value;
  bcWeb3.setDefaultAccount(def);
}
window.setDefaultAccount = setDefaultAccount;

//*************REGISTRY

function initPubKeyRegistry(){
  var previousPublishedVersion = document.getElementById("initPubKeyRegistry").value;
  var pubKeyRegistry = registryWeb3.deployPubKeyRegistry(String(previousPublishedVersion));
}
window.initPubKeyRegistry = initPubKeyRegistry;

function publishPubKey(pubKey){
  var address = document.getElementById("registryContractAddress").value;
  var pubKey = document.getElementById("pubKey").value;
  registryWeb3.set(address, pubKey);

}
window.publishPubKey = publishPubKey;

//*************IDENTITY MANAGER

function initIdentityManager(){
  var version = document.getElementById("initIdentityManager").value;
  var identityManager = idManagerWeb3.deployIdentityManager(version);
}
window.initIdentityManager = initIdentityManager;

async function generateAccessToken(){
  var address = document.getElementById("idManagerContractAddress").value;
  idManagerWeb3.generateAccessToken(address);
}
window.generateAccessToken = generateAccessToken;

function createAlastriaIdentity(){
  var address = document.getElementById("idManagerContractAddress").value;
  idManagerWeb3.createAlastriaIdentity(address);
}
window.createAlastriaIdentity = createAlastriaIdentity;
