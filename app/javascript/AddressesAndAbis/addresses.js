var identityManagerAddress = "0x9cca28d98ec895c50c266b7f138dd6316aadb52a";
var publicKeyRegistryAddress = "0xe6042703475d0dd1bc2eb564a55f1832c2527171";
var attestationRegistryAddress = "";
var claimRegistryAddress = "";
var proxyAddress = "";

module.exports.identityManagerAddress = function(){
  return identityManagerAddress;
}

module.exports.publicKeyRegistryAddress = function(){
  return publicKeyRegistryAddress;
}

module.exports.attestationRegistryAddress = function(){
  return attestationRegistryAddress;
}

module.exports.claimRegistryAddress = function(){
  return claimRegistryAddress;
}

module.exports.proxyAddress = function(){
  return proxyAddress;
}
