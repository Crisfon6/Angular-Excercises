const os = require('os');
const fs = require('fs');

fs.writeFile('./texto.txt','linea uno',(err)=>{
    if(err) return console.log(err);
    
    console.log("archivo creado");
    

})
fs.readFile('./texto.txt',(err,data)=>{
    if(err){
        return console.log(err);
        
    }
    console.log(data.toString());
    
})

console.log(os.platform());


console.log(os.cpus());
console.log(os.release());

console.log(os.freemem());
console.log(os.totalmem());

