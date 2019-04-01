const fs = require('fs');
var bcWeb3 = require('./bcWeb3.js');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

module.exports.test = function() {
  var response = bcWeb3.test();
  return response;
}

var identityManagerAbi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"identityKeys","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[{"name":"_identityAttestator","type":"address"}],"name":"getEidasLevel","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"},{"name":"_level","type":"uint8"}],"name":"addIdentityAttestator","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"isIdentityProvider","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transfer","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"addIdentityProvider","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"destination","type":"address"},{"name":"data","type":"bytes"}],"name":"createIdentityWithCall","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_signAddress","type":"address"}],"name":"generateAccessToken","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"removeIdentityProvider","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"}],"name":"removeIdentityAttestator","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"},{"name":"_level","type":"uint8"}],"name":"modifyIdentityAttestatorEidasLevel","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"recoveryKey","type":"address"}],"name":"createIdentity","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[],"name":"createAlastriaIdentity","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"inputs":[{"name":"_version","type":"uint256"}],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"anonymous":false,"inputs":[{"indexed":true,"name":"signAddress","type":"address"}],"name":"AccessTokenGenerated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"method","type":"string"}],"name":"OperationWasNotSupported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"owner","type":"address"}],"name":"LogIdentityCreated","type":"event"}];

//TEMPORARY FUNCTION UNTIL COMPILE AND DEPLOY IS FIXED
module.exports.deployIdentityManager = function(version){
  var _version = version;
  var alastriaidentitymanagerContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"identityKeys","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[{"name":"_identityAttestator","type":"address"}],"name":"getEidasLevel","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"},{"name":"_level","type":"uint8"}],"name":"addIdentityAttestator","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"isIdentityProvider","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transfer","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"addIdentityProvider","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"destination","type":"address"},{"name":"data","type":"bytes"}],"name":"createIdentityWithCall","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_signAddress","type":"address"}],"name":"generateAccessToken","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityProvider","type":"address"}],"name":"removeIdentityProvider","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"}],"name":"removeIdentityAttestator","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_identityAttestator","type":"address"},{"name":"_level","type":"uint8"}],"name":"modifyIdentityAttestatorEidasLevel","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"recoveryKey","type":"address"}],"name":"createIdentity","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[],"name":"createAlastriaIdentity","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"inputs":[{"name":"_version","type":"uint256"}],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"anonymous":false,"inputs":[{"indexed":true,"name":"signAddress","type":"address"}],"name":"AccessTokenGenerated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"method","type":"string"}],"name":"OperationWasNotSupported","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identity","type":"address"},{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"owner","type":"address"}],"name":"LogIdentityCreated","type":"event"}]);
  var alastriaidentitymanager = alastriaidentitymanagerContract.new(
     _version,
     {
       from: web3.eth.accounts[0],
       data: '0x6060604052612710600455341561001557600080fd5b604051602080611c70833981016040528080519060200190919050505b5b5b5b610051336100a3640100000000026108fe176401000000009004565b5b5b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b806003819055505b5061017f565b806100c08161012964010000000002610818176401000000009004565b1515156100cc57600080fd5b60016000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690505b919050565b611ae28061018e6000396000f300606060405236156100e4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c91465e146100e95780630e5a4fbb1461016257806316af32da146101bd57806316fe1d99146102025780631a69523014610253578063286714211461028c57806328956a89146102c55780632f54bf6e146103605780634284f8d4146103b157806354fd4d50146103ea5780636a116689146104135780638b765db01461044c5780638da5cb5b14610485578063b6728fe4146104da578063d10e73ab1461051f578063d7c6b07814610577575b600080fd5b34156100f457600080fd5b610120600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061058c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016d57600080fd5b610199600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105bf565b604051808260048111156101a957fe5b60ff16815260200191505060405180910390f35b34156101c857600080fd5b610200600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803560ff16906020019091905050610677565b005b341561020d57600080fd5b610239600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610818565b604051808215151515815260200191505060405180910390f35b341561025e57600080fd5b61028a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061086e565b005b341561029757600080fd5b6102c3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108fe565b005b34156102d057600080fd5b61035e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610971565b005b341561036b57600080fd5b610397600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d56565b604051808215151515815260200191505060405180910390f35b34156103bc57600080fd5b6103e8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610db1565b005b34156103f557600080fd5b6103fd610e57565b6040518082815260200191505060405180910390f35b341561041e57600080fd5b61044a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e5d565b005b341561045757600080fd5b610483600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ecf565b005b341561049057600080fd5b610498610fb8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104e557600080fd5b61051d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803560ff16906020019091905050610fde565b005b341561052a57600080fd5b610575600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611161565b005b341561058257600080fd5b61058a611298565b005b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff16151561061d57600080fd5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1691505b5b50919050565b60008180600481111561068657fe5b73__browser/Eidas.sol:Eidas_______________630fa78bf790916000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260048111156106e657fe5b60ff16815260200191505060206040518083038186803b151561070857600080fd5b6102c65a03f4151561071957600080fd5b50505060405180519050151561072e57600080fd5b83600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff1615151561078b57600080fd5b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209250838360000160006101000a81548160ff021916908360048111156107ec57fe5b021790555060018360000160016101000a81548160ff0219169083151502179055505b5b505b50505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690505b919050565b61087733610d56565b151561088257600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156108f95780600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b5b50565b8061090881610818565b15151561091457600080fd5b60016000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b5050565b600033600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156109b057600080fd5b336000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054118015610a3e575042600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054115b1515610a4957600080fd5b610a516113c4565b604051809103906000f0801515610a6757600080fd5b925085600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff1663d7f31eb9866000876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bab5780820151818401525b602081019050610b8f565b50505050905090810190601f168015610bd85780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1515610bf857600080fd5b6102c65a03f11515610c0957600080fd5b5050508273ffffffffffffffffffffffffffffffffffffffff16631a695230876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1515610ca657600080fd5b6102c65a03f11515610cb757600080fd5b5050503373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f1d4dfe683e19a43c6f5eaaecbf81b21949f9638b73b7cdd95b3c2ba29322064a88604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a35b5b505b5050505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161490505b919050565b33610dbb81610818565b1515610dc657600080fd5b6004544201600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167fce441eb9c05f9e82277e7a03d7082902826f62751bc38c394c946952f338f30a60405160405180910390a25b5b5050565b60035481565b80610e6781610818565b1515610e7257600080fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b5050565b600081600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff161515610f2d57600080fd5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020915060008260000160006101000a81548160ff02191690836004811115610f8f57fe5b021790555060008260000160016101000a81548160ff0219169083151502179055505b5b505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081806004811115610fed57fe5b73__browser/Eidas.sol:Eidas_______________630fa78bf790916000604051602001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600481111561104d57fe5b60ff16815260200191505060206040518083038186803b151561106f57600080fd5b6102c65a03f4151561108057600080fd5b50505060405180519050151561109557600080fd5b83600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900460ff1615156110f157600080fd5b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209250838360000160006101000a81548160ff0219169083600481111561115257fe5b02179055505b5b505b50505050565b600061116b6113c4565b604051809103906000f080151561118157600080fd5b905080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f1d4dfe683e19a43c6f5eaaecbf81b21949f9638b73b7cdd95b3c2ba29322064a85604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a35b505050565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156112d557600080fd5b336000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054118015611363575042600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054115b151561136e57600080fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113bd3330611161565b5b5b505b50565b6040516106e2806113d58339019056006060604052341561000f57600080fd5b5b5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6105fd806100e56000396000f30060606040523615610076576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a695230146100c85780632f54bf6e146101015780638da5cb5b14610152578063a75c24f3146101a7578063ce746024146101f8578063d7f31eb91461024d575b5b3373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874346040518082815260200191505060405180910390a25b005b34156100d357600080fd5b6100ff600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102d2565b005b341561010c57600080fd5b610138600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610361565b604051808215151515815260200191505060405180910390f35b341561015d57600080fd5b6101656103bb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b257600080fd5b6101de600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103e1565b604051808215151515815260200191505060405180910390f35b341561020357600080fd5b61020b61043c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561025857600080fd5b6102d0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610462565b005b6102db33610361565b15156102e657600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151561035c57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b5b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161490505b919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161490505b919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61046b33610361565b151561047657600080fd5b8273ffffffffffffffffffffffffffffffffffffffff16828260405180828051906020019080838360005b838110156104bd5780820151818401525b6020810190506104a1565b50505050905090810190601f1680156104ea5780820380516001836020036101000a031916815260200191505b5091505060006040518083038185876187965a03f192505050151561050e57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff167fc1de93dfa06362c6a616cde73ec17d116c0d588dd1df70f27f91b500de207c4183836040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561058f5780820151818401525b602081019050610573565b50505050905090810190601f1680156105bc5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a25b5b5050505600a165627a7a72305820ae1594e07d0935ea2b8d1695c16a5571451d179773b9e8af2380a045097545c10029a165627a7a7230582073de2a33455757abdfd892b83cb9f7d9c0ebdb99db00d3a1db3196ff6f8af7580029',
       gas: '4700000'
     }, function (e, contract){
      console.log(e, contract);
      if (typeof contract.address !== 'undefined') {
           console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
      }
   })
   return alastriaidentitymanager;
}

module.exports.generateAccessToken = async function(address, signAddress){
  var contract = bcWeb3.getContractInstance(identityManagerAbi, String(address));
  var response = await contract.generateAccessToken(String(signAddress), {from: web3.eth.defaultAccount, gas: 4700000});
  return response
}

module.exports.listenAccessTokenEvent = function(address, account){
  var contract = bcWeb3.getContractInstance(identityManagerAbi, String(address));
  var AccessTokenGenerated = contract.AccessTokenGenerated({_signAddress: account}, {fromBlock: 0, toBlock: 'latest'});
  var eventLog = '';
  AccessTokenGenerated.get(function(error, logs){
    if(error) {
      console.log(error);
    } else {
      console.log("Event AccessTokenGenerated emited for signAddress: ")
      console.log(logs[logs.length-1].args.signAddress)
      logs.forEach(function(element){
        //console.log(element.args);
        //si el filtro owner:account no funciona recorrer aqui todos y mostrar solo el adecuado
      });
    }
  });
}

module.exports.createAlastriaIdentity = function(address){
  var contract = bcWeb3.getContractInstance(identityManagerAbi, String(address));
  contract.createAlastriaIdentity({from: web3.eth.defaultAccount, gas: 4700000});
}

module.exports.listenLogIdentityCreatedEvent = function(address, account, idName){
  var contract = bcWeb3.getContractInstance(identityManagerAbi, String(address));
  var LogIdentityCreated = contract.LogIdentityCreated({owner: String(account)}, {fromBlock: 0, toBlock: 'latest'});
  var eventLog = '';
  LogIdentityCreated.get(function(error, logs){
    if(error) {
      console.log(error);
    } else {
      console.log("Event LogIdentityCreated with: ")
      console.log(logs[logs.length-1].args)
      fs.writeFile('./../ids/' + idName + '/did/alastriaID.txt', logs[logs.length-1].args.identity, 'utf8', (err) => {
        if(err) throw err;
        console.log('File alastriaID saved')
      });
      logs.forEach(function(element){
        //console.log(element.args);
        //si el filtro owner:account no funciona recorrer aqui todos y mostrar solo el adecuado
      });
    }
  });
}
