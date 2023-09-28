const crypto = require("crypto");
const { encrpted, algorithm, key, iv } = require("./encriypt");

// function hash(input) {
//   const encrpt = crypto.createHash("sha256").update(input).digest("hex");
//   return encrpt;
// }

// let inp = hash("tobi");
// let inp2 = hash("tobi");
// console.log(inp, inp2, inp == inp2);

// let salt = crypto.randomBytes(16).toString("hex");

// const hashme = crypto
//   .createHmac("sha256", "tobhiro")
//   .update("hellome" + salt)
//   .digest("hex");

// const hashme2 = crypto
//   .createHmac("sha256", "tobhiro")
//   .update("hellome")
//   .digest("hex");

// console.log(hashme, hashme2, hashme == hashme2);

// // const finalencryp = crypto.createCipheriv("aes-192-ocb", "a password");
// // 53739a6d497e7d52662e3aa2775c8ab25740c661ec5f5305544863b67d00652b

const salt = crypto.randomBytes(16).toString("hex");
function hashed(text) {
  const secret = "tobhiro";
  const encrpt = crypto
    .createHmac("sha256", secret)
    .update(text + salt)
    .digest("hex");
  return encrpt;
}

// console.log(hashed("tobi oladele"));

function decrpt(encrptd) {
  console.log("encrotbmb", encrptd);
  let decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrptd, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

console.log(decrpt(encrpted));
