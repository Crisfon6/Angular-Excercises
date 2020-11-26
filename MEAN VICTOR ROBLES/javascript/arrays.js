'use strict'

var nombre = "Cristhian Fonseca";
var nombres= ["CRsthia", "Victor","MAnul",123];

var lenguages = new Array("php","java","go","python","js");

// var element = parseInt(prompt("me",0));
// if(element>nombres.length){
//     alert("no existe ingrese un numero menor que"+ nombres.length)
// }else{

//     alert(nombres[element])
// }

document.write("<h1>Lenguajes de programacion 2019</h1>");
// document.write("<ul>")
// // for (let index = 0; index < lenguages.length; index++) {
// //     const element = lenguages[index];
// //     document.write("<li>"+element+"</li>");
// // }
// lenguages.forEach((element,index,data)=>{
//     document.write("<li>"+index+element+"</li>");
//     console.log(data)
// });

// document.write("</ul>")
document.write("<ul>")
for(let lenguaje in lenguages){
    document.write("<li>"+lenguaje+lenguages[lenguaje]+"</li>");
    
}document.write("</ul>")


//busqudas

var prices = ['1','2','61']

var busqueda3 = prices.some(price => price>60)
var  busqueda1 = lenguages.find(leng=> leng=='php');
var  busqueda2 = lenguages.findIndex(leng=> leng=='php');
console.log(busqueda3)
