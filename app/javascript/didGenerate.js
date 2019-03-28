"use strict";

var bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
var idManagerWeb3 = require('./blockchainWeb3/idManagerWeb3.js');
var registryWeb3 = require('./blockchainWeb3/registryWeb3.js');
var registryWeb3 = require('./blockchainWeb3/claimRegistryWeb3.js');
var attestationRegistryWeb3 = require('./blockchainWeb3/attestationRegistryWeb3.js');

function test(){
  var response = idManagerWeb3.test();
  console.log(response);
}
window.test = test;


//*************GENERAL

function getAccountN(){
  var n = document.getElementById("getAccountN").value;
  var acc = bcWeb3.getAccounts();
  document.getElementById("accountN").value = acc[n];
}

function getDefaultAccount(){
  var def = bcWeb3.getDefaultAccount();
  document.getElementById("getDefaultAccount").value = def;
}
window.getDefaultAccount = getDefaultAccount;

function setDefaultAccount(){
  var def = document.getElementById("setDefaultAccount").value;
  bcWeb3.setDefaultAccount(def);
}

//*************REGISTRY

function deployPubKeyRegistry(){
  var previousPublishedVersion = document.getElementById("initPubKeyRegistry").value;
  var pubKeyRegistry = registryWeb3.deployPubKeyRegistry(String(previousPublishedVersion));
}

function setPubKey(){
  var address = document.getElementById("registryContractAddress").value;
  var pubKey = document.getElementById("pubKeySet").value;
  registryWeb3.set(address, pubKey);
}

function revokePublicKey(){
  var address = document.getElementById("registryContractAddress").value;
  var pubKey = document.getElementById("pubKeyrevokePublicKey").value;
  registryWeb3.revokePublicKey(address, pubKey);
}

function deletePublicKey(){
  var address = document.getElementById("registryContractAddress").value;
  var pubKey = document.getElementById("pubKeydeletePublicKey").value;
  registryWeb3.deletePublicKey(address, pubKey);
}

async function currentPublicKey(){
  var address = document.getElementById("registryContractAddress").value;
  var subject = document.getElementById("subjectcurrentPublicKey").value;
  var response = await registryWeb3.currentPublicKey(address, subject);
  document.getElementById("currentPublicKeyResponse").value = response;
}

async function publicKeyStatus(){
  var address = document.getElementById("registryContractAddress").value;
  var subject = document.getElementById("subjectpublicKeyStatus").value;
  var pubKey = document.getElementById("pubKeypublicKeyStatus").value;
  var response = await registryWeb3.publicKeyStatus(address, subject, pubKey);
  document.getElementById("publicKeyStatusResponse").value = response;
}

//***************ATTESTATION REGISTRY

function deployAttestationRegistry(){
  var previousPublishedVersion = document.getElementById("initAttestationRegistry").value;
  var attestationRegistry = registryWeb3.deployAttestationRegistry(String(previousPublishedVersion));
}

function setAttestation(){
  var dataHash = document.getElementById("dataHashSetAttestation").value;
  var uri = document.getElementById("uriSetAttestation").value;
  var address = document.getElementById("attestationRegistryContractAddress").value;
  attestationRegistryWeb3.set(address, dataHash, uri);
}

function deleteAttestation(){
  var dataHash = document.getElementById("dataHashDeleteAttestation").value;
  var address = document.getElementById("attestationRegistryContractAddress").value;
  attestationRegistryWeb3.deleteAttestation(address, dataHash);
}

async function subjectAttestationStatus(){
  var subject = document.getElementById("subjectSubjectAttestationStatus").value;
  var dataHash = document.getElementById("dataHashSubjectAttestationStatus").value;
  var address = document.getElementById("attestationRegistryContractAddress").value;
  var response = await attestationRegistryWeb3.subjectAttestationStatus(address, subject, dataHash);
  document.getElementById("subjectAttestationStatusResponse").value = response;
}

async function subjectAttestationList(){
  var address = document.getElementById("attestationRegistryContractAddress").value;
  var response = await attestationRegistryWeb3.subjectAttestationList(address);
  document.getElementById("subjectAttestationListResponse").value = response;
}

function revokeAttestation(){
  var revHash = document.getElementById("revHashrevokeAttestation").value;
  var status = document.getElementById("statusrevokeAttestation").value;
  var address = document.getElementById("attestationRegistryContractAddress").value;
  attestationRegistryWeb3.revokeAttestation(address, revHash, status);
}

async function issuerRevocationStatus(){
  var issuer = document.getElementById("issuerissuerRevocationStatus").value;
  var revHash = document.getElementById("revHashissuerRevocationStatus").value;
  var address = document.getElementById("attestationRegistryContractAddress").value;
  var response = await attestationRegistryWeb3.issuerRevocationStatus(address, issuer, revHash);
  document.getElementById("issuerRevocationStatusResponse").value = response;
}

async function attestationStatus(){
  var subjectStatus = document.getElementById("subjectStatusattestationStatus").value;
  var issuerStatus = document.getElementById("issuerStatusattestationStatus").value;
  var address = document.getElementById("attestationRegistryContractAddress").value;
  var response = await attestationRegistryWeb3.attestationStatus(address, subjectStatus, issuerStatus);
  document.getElementById("attestationStatusResponse").value = response;
}

//**************CLAIM REGISTRY

//Subject

function deployClaimRegistry(){
  var previousPublishedVersion = document.getElementById("initClaimRegistry").value;
  var claimRegistry = registryWeb3.deployPubKeyRegistry(String(previousPublishedVersion));
}

function setClaim(){
  var dataHash = document.getElementById("dataHashSetClaim").value;
  var uri = document.getElementById("uriSetClaim").value;
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

async function generateAccessToken(){
  var signAddress = document.getElementById("signAddressgenerateAccessToken").value;
  var address = document.getElementById("idManagerContractAddress").value;
  idManagerWeb3.generateAccessToken(address, signAddress);
}

function createAlastriaIdentity(){
  var address = document.getElementById("idManagerContractAddress").value;
  idManagerWeb3.createAlastriaIdentity(address);
}
