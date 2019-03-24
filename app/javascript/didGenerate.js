/*
To create a DecentralizedID:
Deploy AlastriaIdentityManager
Call function createIdentity
Event LogIdentityCreated identity is the address of the proxy
*/

import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';
//import {deployContract} from './blockchainWeb3/bcWeb3.js';

let contractPath = './../../contracts/newIdentityManager/AlastriaIdentityManager.sol';
let contractName = 'AlastriaIdentityManager';

let didModel = {

}

function generate(){
    bcWeb3.deployContract(contractPath, contractName);
    return
}
