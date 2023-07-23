const minimist = require("minimist");
const soma = require("./soma").soma
 
const args= minimist(process.argv.slice(2))

let nome= args['nome'];
let sobreNome = args['sobreNome'];

console.log(soma(nome,sobreNome));