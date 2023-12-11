const CryptoJS = require('crypto-js');

// Your Secret key and IV
const secretKey = 'secretKey';
const iv = 'IV Key';

// Your JSON variable Ex: {'email':'test@gmail.com','password':'P4SSW0RD'}

const jsonData = {JSON Data Here};
const jsonString = JSON.stringify(jsonData);

// Encrypt the JSON string with AES-256-CBC
// Your jsonString will Encrypt with your spesific secretKey and IV
const encrypted = CryptoJS.AES.encrypt(jsonString, secretKey, { iv: iv }).toString();
console.log('Encrypted:', encrypted);

const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey, { iv: iv }).toString(CryptoJS.enc.Utf8);
console.log('Decrypted: ', decrypted)
