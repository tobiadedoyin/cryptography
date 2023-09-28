const crypto = require("crypto");

let algorithm = "rsa";
const bits = 2048;

let keypair = crypto.generateKeyPairSync(algorithm, {
  modulusLength: bits,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

let publicKey = keypair.publicKey;
let privateKey = keypair.privateKey;

console.log(privateKey, publicKey);

const plainText = "rubbish";
const encryptedBuffer = crypto.publicEncrypt(publicKey, Buffer.from(plainText));
const encrypted = encryptedBuffer.toString("hex");

console.log("Encrypted (Base64):\n", encrypted);

const decryptedBuffer = crypto.privateDecrypt(privateKey, encryptedBuffer);
const decryptedText = decryptedBuffer.toString("utf-8");

console.log("Decrypted:\n", decryptedText);

// let plainText = "rubbish";
// let encrypted = crypto
//   .publicEncrypt(publicKey, Buffer.from(plainText))
//   .toString("hex");
// let decrypted = crypto.privateDecrypt(privateKey, encrypted).toString("utf-8");

// console.log(encrypted, decrypted);
