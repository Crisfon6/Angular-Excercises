'use strict'

//comprobar si es compatible o existe localStorage
if(typeof(Storage) !== 'undefined'){
    console.log('localstorage allow')
}else{
    console.log('localstorage no found')
}
//guardar datos
localStorage.setItem("Nombre","CRisthian")

//recuperar element local storage


document.querySelector('.localstorage').innerHTML =localStorage.getItem('Nombre')

//guardar objeto
var usuario = {
    nombre: 'cristhian',
    email: 'cdelga@gmail.com',
    web : ' cristhian'

}

localStorage.setItem("user",JSON.stringify(usuario))
//recuperar obj
console.log(localStorage.getItem("user"))
var userJson = JSON.parse(localStorage.getItem('user'));
console.log(userJson)
document.querySelector('#email').append(userJson.email)
//elimina
localStorage.clear()
//
document.querySelector('#datos').append(userJson.email)
