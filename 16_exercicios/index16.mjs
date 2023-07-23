import inquirer from 'inquirer';
import  chalk from 'chalk';

inquirer.prompt([{
    name:'idade',
    message: "Qual é sua idade:"
}]).then((resposta)=>{
    console.log(chalk.bgYellow.black(`idade é ${resposta.idade}`))
}).catch(erro=>{console.log(erro)})