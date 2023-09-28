const crypto = require("crypto");

let algorithm = "aes-256-cbc";
let key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);

function ensymmetric(text) {
  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrpted = cipher.update(text, "utf8", "hex");
  encrpted += cipher.final("hex");
  return encrpted;
}

const encrpted = ensymmetric("my name is tobi");

module.exports = { encrpted, algorithm, key, iv };
