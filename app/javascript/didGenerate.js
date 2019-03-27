import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';
import * as idManagerWeb3 from './blockchainWeb3/idManagerWeb3.js';
import * as registryWeb3 from './blockchainWeb3/registryWeb3.js';
import * as claimRegistryWeb3 from './blockchainWeb3/claimRegistryWeb3.js';

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

//**************CLAIM REGISTRY

//Subject

function deployClaimRegistry(){
  var previousPublishedVersion = document.getElementById("initClaimRegistry").value;
  var pubKeyRegistry = registryWeb3.deployPubKeyRegistry(String(previousPublishedVersion));
}

function set(){
  var dataHash = document.getElementById("dataHashSet").value;
  var uri = document.getElementById("uriSet").value;
  var address = document.getElementById("claimRegistryContractAddress").value;
  claimRegistryWeb3.set(address, dataHash, uri);
}

function subjectUpdateClaim(){
  var dataHash = document.getElementById("dataHashSubjectUpdateClaim").value;
  var status = document.getElementById("statusSubjectUpdateClaim").value;
  var address = document.getElementById("claimRegistryContractAddress").value;
  claimRegistryWeb3.subjectUpdateClaim(address, dataHash, uri);
}

function subjectClaimStatus(){
  var dataHash = document.getElementById("dataHashSubjectClaimStatus").value;
  var subject = document.getElementById("subjectSubjectClaimStatus").value;
  var address = document.getElementById("claimRegistryContractAddress").value;
  var response = claimRegistryWeb3.subjectClaimStatus(address, subject, dataHash);
  document.getElementById("responseSubjectClaimStatus").value = response;
}

function subjectClaimList(){
  var address = document.getElementById("claimRegistryContractAddress").value;
  var response = claimRegistryWeb3.subjectClaimList(address);
  document.getElementById("responseSubjectClaimList").value = response;
}

//Receiver

function receiverUpdateClaim(){
  var dualHash = document.getElementById("dualHashReceiverUpdateClaim").value;
  var status = document.getElementById("statusReceiverUpdateClaim").value;
  var address = document.getElementById("claimRegistryContractAddress").value;
  claimRegistryWeb3.receiverUpdateClaim(address, dualHash, status);
}

function receiverClaimStatus(){
  var issuer = document.getElementById("issuerReceiverClaimStatus").value;
  var dualHash = document.getElementById("dualHashReceiverClaimStatus").value;
  var address = document.getElementById("claimRegistryContractAddress").value;
  var response = claimRegistryWeb3.receiverClaimStatus(address, issuer, dualHash);
  document.getElementById("responseReceiverClaimStatus").value = response;
}

//Utility

function claimStatus(){
  var subjectStatus = document.getElementById("subjectStatusClaimStatus").value;
  var receiverStatus = document.getElementById("receiverStatusClaimStatus").value;
  var address = document.getElementById("claimRegistryContractAddress").value;
  var response = claimRegistryWeb3.claimStatus(address);
  document.getElementById("responseClaimStatus").value = response;
}

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
