/*
To create a DecentralizedID:
Deploy AlastriaIdentityManager
call function generateAccessToken
Call function createIdentity
Event LogIdentityCreated identity is the address of the proxy
*/

import * as bcWeb3 from './blockchainWeb3/bcWeb3.js';
import * as idManagerWeb3 from './blockchainWeb3/idManagerWeb3.js';

let contractPath = './../../contracts/newIdentityManager/AlastriaIdentityManager.sol';
let contractName = 'AlastriaIdentityManager';

let didModel = {

}

function generate(){
    var defaultAccount = bcWeb3.getDefaultAccount();
    var identityManager = idManagerWeb3.deployIdentityManager(1);
    idManagerWeb3.generateAccessToken(identityManager);
    idManagerWeb3.createAlastriaIdentity(identityManager);
    return
}
