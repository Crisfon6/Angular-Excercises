'use strict'

var categorias = ['accion','Terror','Comedia'];

var peliculas = ['la verdad duele', 'it','son como niños'];
peliculas.reverse()//orden inverso
peliculas.sort()//orden alabetico
console.log("ho"+peliculas)
var cine = [categorias,peliculas];

// console.log(cine);
// console.log(cine[0][1]);
// console.log(cine[1][2]);

// peliculas.push("orton")//con esto agrego elementos a un array
// console.log(peliculas)
// peliculas.pop()//elimina el ultimo element

var index = peliculas.indexOf('it');

if(index> -1){
    peliculas.splice(index,1);
}

console.log(peliculas)
var peliculaString = peliculas.join();//esto lo convierte el array en un string
console.log(peliculaString)

var cadena = "texto1, text2,texto3";
var cadena_array = cadena.split(",");

console.log(cadena_array)
