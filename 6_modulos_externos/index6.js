const minimist = require("minimist");
 
const args= minimist(process.argv.slice(2))

console.log(args);

const nome= args["nome"];
const profisao = args["profisao"];
console.log(nome,profisao);

console.log(`O nome é ${nome} e a profissão ${profisao}`)