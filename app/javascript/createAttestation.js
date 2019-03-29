var fs = require('fs');
var readlineSync = require('readline-sync');

var attestatorName = readlineSync.question("Enter attestator name: ");
var attestationType = readlineSync.question("Enter type of attestation (address/birth): ");

var attestationFile = fs.readFileSync('./../json/attestation_' + attestationType + '.json', 'utf8');
var attestation = JSON.parse(attestationFile);

attestation["AtributeData"]["@LevelOfAssurance"] = readlineSync.question("Enter level of assurance: ");

for (i in attestation["AtributeData"][attestationType]){
  attestation["AtributeData"][attestationType][i]= readlineSync.question("Enter " + i + ": ");
}

attestation["IssuanceDates"]["InitialValidityDate"] = readlineSync.question("Enter InitialValidityDate: ");
attestation["IssuanceDates"]["EndValidityDate"] = readlineSync.question("Enter EndValidityDate: ");
attestation["Issuer"]["IssuerURL"] = readlineSync.question("Enter IssuerURL: ");
attestation["Issuer"]["IssuerAlastriaID"] = readlineSync.question("Enter IssuerAlastriaID: ");
attestation["Issuer"]["IssuerPubKey"] = readlineSync.question("Enter IssuerPubKey: ");
attestation["Issuer"]["IssuerSignature"] = readlineSync.question("Enter IssuerSignature: ");

var fileNameWrite = readlineSync.question("Enter file name: ");

fs.writeFile('./../ids/' + attestatorName '/attestations/'+ fileNameWrite + ".json", JSON.stringify(attestation), 'utf8', (err) => {
  if(err) throw err;
  console.log('File saved')
});
console.log(attestation)
