//var bcWeb3 = require('./blockchainWeb3/bcWeb3.js');
import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';

var acc = bcWeb3.getAccounts();
console.log(acc)
var def1 = bcWeb3.getDefaultAccount();
console.log(def1)
bcWeb3.setDefaultAccount(acc[3]);
var def2 = bcWeb3.getDefaultAccount();
console.log(def2)

var identiyManager = bcWeb3.deployIdentityManager();
