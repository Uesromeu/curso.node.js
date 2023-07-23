import readline from 'readline';
import chalk from 'chalk';

const perguntar = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

perguntar.question(chalk.bgRed.bold.italic("Qual é sua linguagem de programação ?"),(Resposta)=>{
   if( Resposta === "Phyton"){
    console.log(chalk.red.bold("Isso é uma liguagem ? :( !!"))
   }
   else{
    console.log(chalk.green(`${Resposta} isso sim é uma linguagem :).`))
   }
   perguntar.close();
})