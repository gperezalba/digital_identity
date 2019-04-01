var bcWeb3 = require('./bcWeb3.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var attestationRegistryAbi = JSON.parse(fs.readFileSync('./AddressesAndAbis/attestationRegistryAbi.txt', 'utf8'));
var proxyAbi = JSON.parse(fs.readFileSync('./AddressesAndAbis/proxyAbi.txt', 'utf8'));

module.exports.deployAttestationRegistry = function(previousPublishedVersion){
  var _previousPublishedVersion = previousPublishedVersion;/* var of type address here */
  var alastriaattestationregistryContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"revHash","type":"bytes32"},{"name":"status","type":"uint8"}],"name":"revokeAttestation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dataHash","type":"bytes32"}],"name":"deleteAttestation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"subjectAttestationList","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"previousPublishedVersion","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"subjectStatus","type":"uint8"},{"name":"issuerStatus","type":"uint8"}],"name":"attestationStatus","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"dataHash","type":"bytes32"},{"name":"URI","type":"string"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"issuer","type":"address"},{"name":"revHash","type":"bytes32"}],"name":"issuerRevocationStatus","outputs":[{"name":"exists","type":"bool"},{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"subject","type":"address"},{"name":"dataHash","type":"bytes32"}],"name":"subjectAttestationStatus","outputs":[{"name":"exists","type":"bool"},{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_previousPublishedVersion","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"dataHash","type":"bytes32"}],"name":"AttestationDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"revHash","type":"bytes32"},{"indexed":false,"name":"status","type":"uint8"}],"name":"AttestationRevoked","type":"event"}]);
  var alastriaattestationregistry = alastriaattestationregistryContract.new(
     _previousPublishedVersion,
     {
       from: web3.eth.accounts[0],
       data: '0x608060405234801561001057600080fd5b50604051602080610d3983398101806040528101908080519060200190929190505050600360008190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610cad8061008c6000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063133cc6fe1461009e578063310ecdd7146100dc57806342c217db1461010d57806354fd4d50146101805780636104464f146101ab578063651728ba14610202578063b480003314610261578063d6c1a485146102d8578063da75947f14610356575b600080fd5b3480156100aa57600080fd5b506100da6004803603810190808035600019169060200190929190803560ff1690602001909291905050506103d4565b005b3480156100e857600080fd5b5061010b6004803603810190808035600019169060200190929190505050610587565b005b34801561011957600080fd5b50610122610697565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b8381101561016b578082015181840152602081019050610150565b50505050905001935050505060405180910390f35b34801561018c57600080fd5b5061019561077b565b6040518082815260200191505060405180910390f35b3480156101b757600080fd5b506101c0610781565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020e57600080fd5b5061023d600480360381019080803560ff169060200190929190803560ff1690602001909291905050506107a7565b6040518082600381111561024d57fe5b60ff16815260200191505060405180910390f35b34801561026d57600080fd5b506102d66004803603810190808035600019169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061086e565b005b3480156102e457600080fd5b50610327600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190505050610a42565b604051808315151515815260200182600381111561034157fe5b60ff1681526020019250505060405180910390f35b34801561036257600080fd5b506103a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190505050610b0f565b60405180831515151581526020018260038111156103bf57fe5b60ff1681526020019250505060405180910390f35b600081600060038111156103e457fe5b8160038111156103f057fe5b10158015610414575060038081111561040557fe5b81600381111561041157fe5b11155b151561041f57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000856000191660001916815260200190815260200160002091508160000160019054906101000a900460ff16600381111561049657fe5b8360038111156104a257fe5b111561058157600160038111156104b557fe5b8360038111156104c157fe5b14806104e35750600260038111156104d557fe5b8360038111156104e157fe5b145b156105805760018260000160006101000a81548160ff021916908315150217905550828260000160016101000a81548160ff0219169083600381111561052557fe5b02179055507f8e049cac6cc1ce3b33c777b8a560f3f22816f85cba80fa30bb69fb459994e0f0848460405180836000191660001916815260200182600381111561056b57fe5b60ff1681526020019250505060405180910390a15b5b50505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000836000191660001916815260200190815260200160002090508060000160009054906101000a900460ff168015610628575060038081111561060857fe5b8160000160019054906101000a900460ff16600381111561062557fe5b14155b156106935760038160000160016101000a81548160ff0219169083600381111561064e57fe5b02179055507feccf92d9ff1a41a73c5a0eb73887926abbed8cfb42356c94e750467935bac03e8260405180826000191660001916815260200191505060405180910390a15b5050565b60006060600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208080548060200260200160405190810160405280929190818152602001828054801561076c57602002820191906000526020600020905b81546000191681526020019060010190808311610754575b50505050509050915091509091565b60005481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082600060038111156107b757fe5b8160038111156107c357fe5b101580156107e757506003808111156107d857fe5b8160038111156107e457fe5b11155b15156107f257600080fd5b826000600381111561080057fe5b81600381111561080c57fe5b10158015610830575060038081111561082157fe5b81600381111561082d57fe5b11155b151561083b57600080fd5b83600381111561084757fe5b85600381111561085357fe5b10151561086257849250610866565b8392505b505092915050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000836000191660001916815260200190815260200160002060000160009054906101000a900460ff161515156108e357600080fd5b6060604051908101604052806001151581526020016000600381111561090557fe5b815260200182815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000846000191660001916815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff021916908360038111156109aa57fe5b021790555060408201518160010190805190602001906109cb929190610bdc565b50905050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208290806001815401808255809150509060018203906000526020600020016000909192909190915090600019169055505050565b600080600084600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a8457600080fd5b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000866000191660001916815260200190815260200160002091508160000160009054906101000a900460ff168260000160019054906101000a900460ff169350935050509250929050565b600080600084600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b5157600080fd5b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000866000191660001916815260200190815260200160002091508160000160009054906101000a900460ff168260000160019054906101000a900460ff169350935050509250929050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c1d57805160ff1916838001178555610c4b565b82800160010185558215610c4b579182015b82811115610c4a578251825591602001919060010190610c2f565b5b509050610c589190610c5c565b5090565b610c7e91905b80821115610c7a576000816000905550600101610c62565b5090565b905600a165627a7a723058201405e584d642708554467fe5ac47c57970c3e3d00bbb68067f28de56e9f7d1080029',
       gas: '4700000'
     }, function (e, contract){
      console.log(e, contract);
      if (typeof contract.address !== 'undefined') {
           console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
      }
   })
}

module.exports.set = function(addressDest, dataHash, uri, addressID){
  var contract = bcWeb3.getContractInstance(attestationRegistryAbi, String(addressDest));
  var calldata = contract.set.getData(String(dataHash), String(uri));
  var proxyContract = bcWeb3.getContractInstance(proxyAbi, String(addressID));
  proxyContract.forward(String(addressDest), 0, calldata, {from: web3.eth.defaultAccount, gas: 300000});
}

module.exports.deleteAttestation = function(address, dataHash){
  var contract = bcWeb3.getContractInstance(attestationRegistryAbi, String(address));
  contract.deleteAttestation(String(dataHash), {from: web3.eth.defaultAccount, gas: 300000});
}

module.exports.subjectAttestationStatus = async function(address, subject, dataHash){
  var contract = bcWeb3.getContractInstance(attestationRegistryAbi, String(address));
  var response = await contract.subjectAttestationStatus(String(subject), String(dataHash), {from: web3.eth.defaultAccount, gas: 300000});
  return response;
}

module.exports.subjectAttestationList = async function(address){
  var contract = bcWeb3.getContractInstance(attestationRegistryAbi, String(address));
  var response = await contract.subjectAttestationList({from: web3.eth.defaultAccount, gas: 300000});
  return response;
}

module.exports.revokeAttestation = function(address, revHash, status){
  var contract = bcWeb3.getContractInstance(attestationRegistryAbi, String(address));
  contract.revokeAttestation(String(revHash), String(status), {from: web3.eth.defaultAccount, gas: 300000});
}

module.exports.issuerRevocationStatus = async function(address, issuer, revHash){
  var contract = bcWeb3.getContractInstance(attestationRegistryAbi, String(address));
  var response = await contract.issuerRevocationStatus(String(issuer), String(revHash), {from: web3.eth.defaultAccount, gas: 300000});
  return response;
}

module.exports.attestationStatus = async function(address, subjectStatus, issuerStatus){
  var contract = bcWeb3.getContractInstance(attestationRegistryAbi, String(address));
  var response = await contract.attestationStatus(String(subjectStatus), String(issuerStatus), {from: web3.eth.defaultAccount, gas: 300000});
  return response;
}
