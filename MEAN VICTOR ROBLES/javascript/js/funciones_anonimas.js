'use strict'
//anonima
var peli = function(nombe){
    console.log(nombe);
}
var p = ()=> console.log(nombe);

function sumame(n1,n2,sumaYmuestra, SumaPorDos){
   var suma =  n1+n2;
   sumaYmuestra(suma);
   SumaPorDos(suma);
   
   return suma;
}
// sumame(4,5,function(dato){
//     console.log(dato);

// },function(dato){
//     console.log("la suma por os",(dato*2));
    
// })

sumame(4,5,dato =>{
    console.log(dato);

},dato =>{
    console.log("la suma por os",(dato*2));
    
})