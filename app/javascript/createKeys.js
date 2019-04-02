const crypto = require('crypto');
const fs = require('fs');
var readlineSync = require('readline-sync');

module.exports.generate = function (idName){
  const {
      privateKey,
      publicKey
  } = crypto.generateKeyPairSync('ec', {
      namedCurve: 'secp521r1',
      publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
      },
      privateKeyEncoding: {
          type: 'sec1',
          format: 'pem',
      }
  });

  fs.writeFile('./../ids/' + idName + '/did/privateKey.pem', privateKey, 'utf8', (err) => {
    if(err) throw err;
    console.log(privateKey)
    console.log('privateKey saved')
  });

  fs.writeFile('./../ids/' + idName + '/did/publicKey.pem', publicKey, 'utf8', (err) => {
    if(err) throw err;
    console.log(publicKey)
    console.log('publicKey saved')
  });
}
