const fs=require('fs');

console.log('inicio');

fs.writeFile("arquivo.js","ola mundo", (err)=>{
    setTimeout(()=>{
        console.log("'arquivo Criado!")
    },1000)
})
   

console.log('fim');