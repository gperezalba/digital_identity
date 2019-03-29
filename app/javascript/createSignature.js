const crypto = require('crypto');
const fs = require('fs');
var readlineSync = require('readline-sync');

var idName = readlineSync.question("Enter ID name: ");
const privateKey = fs.readFileSync('./../ids/' + idName + '/did/privateKey.pem', 'utf8');
console.log(privateKey)

var data = readlineSync.question("Data to sign ¡CAMBIAR POR FICHERO!: ");
const sign = crypto.createSign('SHA256');
sign.update(data);
sign.end();
const signature = sign.sign(privateKey);
console.log(signature.toString('hex'))
fs.writeFile('./../ids/' + idName + '/did/signature.txt', signature.toString('hex'), 'utf8', (err) => {
  if(err) throw err;
  console.log('signature saved')
});
