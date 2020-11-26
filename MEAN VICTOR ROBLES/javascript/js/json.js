'use strict'


var pelicula = {

    titulo: 'Batman',
    año : '2012',
    pais: 'USA'
}
var peliculas= [
    {titulo:'la verdad',año:'20',pais:'da'},
    {titulo:'la das',año:'2330',pais:'da'},
    {titulo:'la veqwwrdad',año:'2120',pais:'da'}
]

var cajapelis= document.querySelector("#peliculas")
var index
for (index in peliculas) {
    
        var p = document.createElement("p")
        p.append(peliculas[index].titulo)
        cajapelis.append(p)
        
    
}
console.log(pelicula)