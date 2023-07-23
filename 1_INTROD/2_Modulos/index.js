const fs= require("fs");

fs.readFile("arquivo.txt" , "utf8", (err,dados)=>{
    if(err){
        console.log(err)
        return err;
    }
    console.log(dados);
});