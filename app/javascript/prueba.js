//var bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';
import * as idManagerWeb3 from './blockchainWeb3/idManagerWeb3.js';
import * as registryWeb3 from './blockchainWeb3/registryWeb3.js';

var acc = bcWeb3.getAccounts();
console.log(acc)
var def1 = bcWeb3.getDefaultAccount();
console.log(def1)
bcWeb3.setDefaultAccount(acc[3]);
var def2 = bcWeb3.getDefaultAccount();
console.log(def2)

var randomAddress = "0xc0d8f541ab8b71f20c10261818f2f401e8194049";
var pubKeyRegistry = registryWeb3.deployPubKeyRegistry(randomAddress);

var identityManager = idManagerWeb3.deployIdentityManager(1);
console.log(identityManager.address)
