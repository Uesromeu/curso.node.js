import inquirer from "inquirer"

inquirer.prompt([
    {
    name:"p1",
    message: "Qual é nota?"
},
{
    name:"p2",
    message:"Qual e nota 2?"
},

]).then((resposta)=>{
    console.log(resposta)
    const media= (parseInt(resposta.p1)+(parseInt(resposta.p2)))/2
    console.log(`media é ${media}`);
}).catch((Erro)=>{
    console.log(Erro)
})