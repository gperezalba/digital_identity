var bcWeb3 = require('./bcWeb3.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var fs = require('fs');

var pubKeyRegistryAbi = JSON.parse(fs.readFileSync('./AddressesAndAbis/publicKeyRegistryAbi.txt', 'utf8'));
var proxyAbi = JSON.parse(fs.readFileSync('./AddressesAndAbis/proxyAbi.txt', 'utf8'));

module.exports.deployPubKeyRegistry  = function(prevVersion){
  var _previousPublishedVersion = prevVersion;/* var of type address here */
  var alastriapublickeyregistryContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"deletePublicKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousPublishedVersion","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"revokePublicKey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"subject","type":"address"}],"name":"currentPublicKey","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"publicKeyList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"publicKey","type":"bytes32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"subject","type":"address"},{"name":"publicKey","type":"bytes32"}],"name":"publicKeyStatus","outputs":[{"name":"exists","type":"bool"},{"name":"status","type":"uint8"},{"name":"startDate","type":"uint256"},{"name":"endDate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_previousPublishedVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"publicKey","type":"bytes32"}],"name":"PublicKeyDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"publicKey","type":"bytes32"}],"name":"PublicKeyRevoked","type":"event"}]);
  var alastriapublickeyregistry = alastriapublickeyregistryContract.new(
     _previousPublishedVersion,
     {
       from: web3.eth.accounts[0],
       data: '0x608060405234801561001057600080fd5b506040516020806109ec83398101806040528101908080519060200190929190505050600360008190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506109608061008c6000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631993b4f91461009357806354fd4d50146100c45780636104464f146100ef578063a8c5916914610146578063a9fd973a14610177578063c000ceee146101d6578063db80813f1461023f578063f39c323814610270575b600080fd5b34801561009f57600080fd5b506100c260048036038101908080356000191690602001909291905050506102fc565b005b3480156100d057600080fd5b506100d96103e2565b6040518082815260200191505060405180910390f35b3480156100fb57600080fd5b506101046103e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015257600080fd5b50610175600480360381019080803560001916906020019092919050505061040e565b005b34801561018357600080fd5b506101b8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610501565b60405180826000191660001916815260200191505060405180910390f35b3480156101e257600080fd5b50610221600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061063c565b60405180826000191660001916815260200191505060405180910390f35b34801561024b57600080fd5b5061026e600480360381019080803560001916906020019092919050505061066c565b005b34801561027c57600080fd5b506102bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190505050610854565b60405180851515151581526020018460018111156102d957fe5b60ff16815260200183815260200182815260200194505050505060405180910390f35b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000836000191660001916815260200190815260200160002090508060000160009054906101000a900460ff16156103de5760018160000160016101000a81548160ff0219169083600181111561039057fe5b02179055504281600201819055507fc7a155c4482b9b68d8c683396c4c1c6ec3303f39766ae7d6ccc88272b7f5b6518260405180826000191660001916815260200191505060405180910390a15b5050565b60005481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000836000191660001916815260200190815260200160002090508060000160009054906101000a900460ff1680156104af575060018081111561048f57fe5b8160000160019054906101000a900460ff1660018111156104ac57fe5b14155b156104fd574281600201819055507fe23e76c154822a25bd6dd330dcf4f1998f97c4c45cd64ecac9e096f56c2511f78260405180826000191660001916815260200191505060405180910390a15b5050565b600081600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561054057600080fd5b6000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050111561062e57600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490500381548110151561061c57fe5b90600052602060002001549150610636565b600060010291505b50919050565b60036020528160005260406000208181548110151561065757fe5b90600052602060002001600091509150505481565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000836000191660001916815260200190815260200160002060000160009054906101000a900460ff161515156106e357600080fd5b4290506106f76106f233610501565b61040e565b6080604051908101604052806001151581526020016000600181111561071957fe5b81526020018281526020016000815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000846000191660001916815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff021916908360018111156107c557fe5b02179055506040820151816001015560608201518160020155905050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208290806001815401808255809150509060018203906000526020600020016000909192909190915090600019169055505050565b600080600080600086600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561089957600080fd5b600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000886000191660001916815260200190815260200160002091508160000160009054906101000a900460ff168260000160019054906101000a900460ff168360010154846002015495509550955095505050929591945092505600a165627a7a72305820a780b06accc8da3fb4ccb2c4a9f06ae044ac8206684b1bd45ed81452b3ebd20c0029',
       gas: '4700000'
     }, function (e, contract){
      console.log(e, contract);
      if (typeof contract.address !== 'undefined') {
           console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
      }
   })
   return alastriapublickeyregistry;
}

module.exports.set = function(addressDest, pubKey, addressID){
  var contract = bcWeb3.getContractInstance(pubKeyRegistryAbi, String(addressDest));
  var calldata = contract.set.getData(pubKey);
  var proxyContract = bcWeb3.getContractInstance(proxyAbi, String(addressID));
  proxyContract.forward(String(addressDest), 0, calldata, {from: web3.eth.defaultAccount, gas: 300000});
}

module.exports.revokePublicKey = function(address, pubKey){
  var contract = bcWeb3.getContractInstance(pubKeyRegistryAbi, String(address));
  contract.revokePublicKey(String(pubKey), {from: web3.eth.defaultAccount, gas: 300000});
}

module.exports.deletePublicKey = function(address, pubKey){
  var contract = bcWeb3.getContractInstance(pubKeyRegistryAbi, String(address));
  contract.deletePublicKey(String(pubKey), {from: web3.eth.defaultAccount, gas: 300000});
}

module.exports.currentPublicKey = async function(address, subject){
  var contract = bcWeb3.getContractInstance(pubKeyRegistryAbi, String(address));
  var response = await contract.currentPublicKey(String(subject), {from: web3.eth.defaultAccount, gas: 300000});
  return response;
}

module.exports.publicKeyStatus = async function(address, subject, pubKey){
  var contract = bcWeb3.getContractInstance(pubKeyRegistryAbi, String(address));
  var response = await contract.publicKeyStatus(String(subject), String(pubKey), {from: web3.eth.defaultAccount, gas: 300000});
  return response;
}
