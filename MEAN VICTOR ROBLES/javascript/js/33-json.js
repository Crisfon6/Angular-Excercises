'use strict'

//JSON 
window.addEventListener("load",()=>{
    var pelicula = {

        nombre: "BATMAN",
        year: 2019,
        country: "USA"
    
    };
    pelicula.nombre = "spiderman"
    var peliculas = [pelicula, {nombre: "BATMN",year: 2012,country:"Colombia"}]
    console.log(pelicula.country)
    
    var div_peliculas = document.querySelector("#peliculas")
    for (const k in peliculas) {
       var p = document.createElement("p")
       p.append(peliculas[k].nombre);
       div_peliculas.append(p)
    }
})
