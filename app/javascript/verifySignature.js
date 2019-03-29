const crypto = require('crypto');
const fs = require('fs');
var readlineSync = require('readline-sync');

var idName = readlineSync.question("Enter ID name: ");
const publicKey = fs.readFileSync('./../ids/' + idName + '/did/publicKey.pem', 'utf8');
var plainData = readlineSync.question("plainData: ");
//var signature = fs.readFileSync('./../ids/' + idName + '/did/signature.txt', 'utf8');
var signature = readlineSync.question("signature: ");
const verify = crypto.createVerify('SHA256');
verify.update(plainData);
verify.end();
console.log(verify.verify(publicKey, signature));
