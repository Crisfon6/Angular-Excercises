'use strict'

//eventos
//raton



window.addEventListener('load',()=>{
    var boton = document.querySelector("#boton")

    function cambiaColor(btn){
        btn.style.background= "red";
    }
    
    var boton2 = document.querySelector("#bestBoton")
    
    boton2.addEventListener('click',()=>{
        cambiaColor(boton2);
    })
    var boton2 = document.querySelector("#nombre")
    boton2.addEventListener('focus',()=>{
        console.log("dentro");
    })
})
