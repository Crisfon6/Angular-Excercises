'use strict'

window.addEventListener('load',()=>{
    console.log('cargado')
    var formulario = document.querySelector("#formulario")
    var dashed = document.querySelector(".dashed")
    dashed.style.display = 'none';


    formulario.addEventListener('submit',()=>{
        console.log("enviado forulario")
        var nombre =document.querySelector("#nombre").value
        var apellido=document.querySelector("#apellido").value
        var edad =parseInt(document.querySelector("#edad").value);
        dashed.style.display = 'block';
        console.log(nombre,apellido,edad)
        console.log(typeof(edad))
      if(nombre.trim()==null || nombre==null || nombre.length == 0){

        alert("el nombre no es valido")
        return false
      }
      if(apellido.trim()==null || apellido==null || apellido.length == 0){

        alert("el apelllido no es valido")
        return false
      }
      if(edad==null || edad<= 0|| isNaN(edad)){

        // alert("la edad no es valido")
        return false
      }
      var c_nombre = document.querySelector(".p_nombre span")
      var c_apellido = document.querySelector(".p_apellido span")
      var c_edad = document.querySelector(".p_edad span")
      c_nombre.innerHTML =nombre
      c_apellido.innerHTML =apellido
      c_edad.innerHTML =edad

        // p_edad.innerHTML = edad
var datos = [nombre,apellido,edad]

var indice
for(indice in datos){
    var parrafo =document.createElement("p")
     console.log(indice)
    parrafo.append(datos[indice])
    dashed.append(parrafo)
    }
   
        

    })
})