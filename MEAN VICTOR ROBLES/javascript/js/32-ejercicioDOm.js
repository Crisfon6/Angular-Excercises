'use strict'

window.addEventListener("load", ()=>{

    var form = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";


    form.addEventListener("submit", ()=>{
        console.log("submit")
        var nombre =document.querySelector("#nombre").value;
        var apellido= document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim() == null || nombre.trim().length==0){
            alert("el nombre no es valido");
            document.querySelector("#e_nombre").innerHTML = "Error en el nombre"
            return false;
        }else{
            document.querySelector("#e_nombre").style.display = "none"
        }
        if (apellido.trim() == null || apellido.trim().length==0){
            alert("el apellido no es valido");
            document.querySelector("#e_apellido").innerHTML = "Error en el apellido"
            return false;
        }else{
            document.querySelector("#e_apellido").style.display = "none";
        }
        if (edad == null || edad<=0 || isNaN(edad)){
            alert("el edad no es valido");
            document.querySelector("#e_edad").innerHTML = "Error en la edad"
            return false;
        }else{
            document.querySelector("#e_edad").style.display = "none";
        }

        box_dashed.style.display = "block";
        // var datos = [nombre,apellido,edad];
        // for (const d in datos) {
           
        //     var parrafo = document.createElement("p");
        //     parrafo.append(datos[d])
        //     box_dashed.append(parrafo)
        // }
        var p_nombre = document.querySelector("#p_nombre span")
        var p_apellido = document.querySelector("#p_apellido span")
        var p_edad = document.querySelector("#p_edad span")

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;

        
    })
});