'use strict'
//recoger parmas ingresado al correr 
//node calculadora.js 2 3 4
var params = process.argv.slice(2);
var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);

var plantilla = 
 `
     la suma es ${num1+num2}
 `;
console.log(plantilla);

console.log("hola mundo");
