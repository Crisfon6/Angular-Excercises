'use strict'

var formulario = document.querySelector('#formpeliculas')

formulario.addEventListener('submit',()=>{
    var titulopeli =document.querySelector('#addpelicula').value
    if(titulopeli.length>=1){
        localStorage.setItem(titulopeli , titulopeli)        
    }
})
var ul = document.querySelector('#list')
for(var i in localStorage){
    console.log(i)
    if(typeof(localStorage[i])=='string'){
        var li = document.createElement('li')
        li.append(localStorage[i])
        ul.append(li)
    }

}


var formularioB = document.querySelector('#formBorrarPelicula')

formularioB.addEventListener('submit',()=>{
    var titulopeli =document.querySelector('#borrarpelicula').value
    if(titulopeli.length>=1){
        localStorage.removeItem(titulopeli)        
    }
})