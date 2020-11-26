'use strict'

//LOCAL storage
window.addEventListener("load",()=>{
//Comrpbar disponiblidad del localstorage
if(typeof(Storage) != 'undefined'){
    console.log('Localstorage disponible')
}else{
    console.log('undefined Localstorage')
}

//save data
localStorage.setItem("Title","Aprendiendo")

//get data LocalStorage
var p = document.querySelector("#local").innerHTML =localStorage.getItem("Title") ;

//Guardar obejtso
var user = {
    name: "Cristhian",
    email: "cristhia@cr.com"

}
//save JSON
localStorage.setItem("user",JSON.stringify(user));
//Get JSON localStorage

console.log(JSON.parse(localStorage.getItem("user")));
var jUser= JSON.parse(localStorage.getItem("user"));

var p = document.querySelector("#datos").innerHTML = jUser.name;

//remove items 
localStorage.removeItem("user")
localStorage.clear()

})


