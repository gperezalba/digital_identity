//const fs = require("fs");
//const solc = require('solc');
//import solc from './../../../node_modules/solc/solcjs'

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

var version = web3.version.api;
console.log(version);

//**********Provider

export function setProvider(web3Instance) {
  if(web3.currentProvider) {
    console.log('Last provider ' + web3.currentProvider);
  }
  web3 = web3Instance;
}

//**********Accounts

export function getDefaultAccount() {
  return web3.eth.defaultAccount;
}

export function setDefaultAccount(account) {
  web3.eth.defaultAccount = account;
}

export function getAccounts() {
  var accounts = web3.eth.accounts;
  //console.log(accounts);
  return accounts;
}

export function signFromAccount(account, data) {
  var result = web3.eth.sign(account, data);
  return result;
}

//*********Events
export function listenAllEventsWithFilter(contractInstance, callback, filterParam, filterValue){
  var events = contractInstance.allEvents([{filterParam: filterValue}]);
  events.watch(function(error, event){
      if (error) {
        callback(error, null);
      } else {
         var eventRet = event;
        callback(null, eventRet);
      }
  });
}

export function listenAllEventsContinuously(contractInstance, callback) {
  var events = contractInstance.allEvents();
  events.watch(function(error, event){
      if (error) {
        callback(error, null);
      } else {
         var eventRet = event;
        callback(null, eventRet);
      }
  });
}

export function listenAllEventsOnce(contractInstance, callback) {
  var events = contractInstance.allEvents();
  events.watch(function(error, event){
    if (error) {
      callback(error, null);
    } else {
       var eventRet = event;
      callback(null, eventRet);
      events.stopWatching();
      }
  });
}

export function printEventLog(instanceEvent) {
    var myEvent = instanceEvent({},{fromBlock: 0, toBlock: "latest"});
    var eventLog = '';
    myEvent.get(function(error, logs){
      if(error) {
        console.log(error);
      } else {
        logs.forEach(function(element){
          console.log(element.args);
        });
      }
    });
}

//********Utils

export function keccak256sha3(data) {
  var hash = web3.sha3(data);
  return hash;
}

export function toHex(data){
  var str = web3.toHex(data);
  return str;
}

//******Contracts
/*
export function getContractAbi(filePath, nameContract) {
  let source = fs.readFileSync(filePath, 'utf8');
  let compiledContract = solc.compile(source, 1);
  let abi = compiledContract.contracts[nameContract].interface;
  return abi;
}

export function deployContract (filePath, nameContract){
  let source = fs.readFileSync(filePath, 'utf8');
  let compiledContract = solc.compile(source, 1);
  let abi = compiledContract.contracts[nameContract].interface;
  let bytecode = compiledContract.contracts[nameContract].bytecode;
  let gasEstimate = web3.eth.estimateGas({data: bytecode});
  let MyContract = web3.eth.contract(JSON.parse(abi));
  var myContractReturned = MyContract.new(param1, param2, {
    from:mySenderAddress,
    data:bytecode,
    gas:gasEstimate}, function(err, myContract){
     if(!err) {
        if(!myContract.address) {
            console.log(myContract.transactionHash)
        } else {
            console.log(myContract.address)
        }
     }
   });
   return myContractReturned;
}
*/

export function getContractInstance(abi, address) {
  var contract = web3.eth.contract(abi);
  contractInstance = contract.at(address);
  return contractInstance;
}
