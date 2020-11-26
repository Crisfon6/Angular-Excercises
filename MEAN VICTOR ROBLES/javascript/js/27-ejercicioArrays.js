'use strict'

function mostrarArray(elementos,txtCustom=""){
    document.write("<h1>Contenido del array</h1>"+ txtCustom);
    document.write("<ul>")
    elementos.forEach((n)=>{
        document.write("<li>"+n+
        
        "</li>")
    })
    document.write("</ul>")
}

var numero = new Array(6);

for (let index = 0; index < 6; index++) {
    // numero[index] = parseInt(prompt("Ingrese un numero",0))
   numero.push((parseInt(prompt("Ingrese un numero",0))))
 
   

}
console.log(numero)
document.write("<h1>Contenido del array</h1>");
numero.sort(function(a, b) {
    return a - b;
  });//ordenar numeros ascendente
// numero.sort(function(a,b){ return b-a});//ordenar numeros descendente
numero.forEach((n)=>{
    document.write("<strong>"+n+
    
    "</strong><br>")
})


//ordenar y mostrar
//numero.sort()
console.log(numero)
mostrarArray(numero)
document.write("<h3>numero de elementos : "+numero.length+"</h3>")
//Busqueda

var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numero.findIndex(n => n==busqueda);
if(posicion && posicion != -1){

    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h4>"+(posicion+1)+"</h3>");
}else{
    document.write("<h1>NO CONTRADO</h1>");
}