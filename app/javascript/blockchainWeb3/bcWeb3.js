var fs = require("fs");
//var solc = require('solc');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

var version = web3.version.api;
console.log(version);

module.exports.test = function(){
  return ('testOK');
}

//**********Provider

module.exports.setProvider = function(web3Instance) {
  if(web3.currentProvider) {
    console.log('Last provider ' + web3.currentProvider);
  }
  web3 = web3Instance;
}

//**********Accounts

module.exports.getDefaultAccount = function() {
  return web3.eth.defaultAccount;
}

module.exports.setDefaultAccount = function(account) {
  web3.eth.defaultAccount = account;
}

module.exports.getAccounts = function() {
  var accounts = web3.eth.accounts;
  //console.log(accounts);
  return accounts;
}

module.exports.signFromAccount = function(account, data) {
  var result = web3.eth.sign(account, data);
  return result;
}

//*********Events
module.exports.listenAllEventsWithFilter = function(contractInstance, callback, filterParam, filterValue){
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

module.exports.listenAllEventsContinuously = function(contractInstance, callback) {
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

module.exports.listenAllEventsOnce = function(contractInstance, callback) {
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

module.exports.printEventLog = function(instanceEvent) {
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

module.exports.keccak256sha3 = function(data) {
  var hash = web3.sha3(data);
  return hash;
}

module.exports.toHex = function(data){
  var str = web3.toHex(data);
  return str;
}

//******Contracts
/*
module.exports.getContractAbi = function(filePath, nameContract) {
  let source = fs.readFileSync(filePath, 'utf8');
  let compiledContract = solc.compile(source, 1);
  let abi = compiledContract.contracts[nameContract].interface;
  return abi;
}

module.exports.deployContract  = function(filePath, nameContract){
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

module.exports.getContractInstance = function(abi, address) {
  var contractInstance = web3.eth.contract(abi).at(address);
  return contractInstance;
}
