'use strict'
// importante el querySelector solo trae un elemento 
// getElementsByClassName , getElementsByTagName esto trae todo 



function cambiaColor(color){
    caja.style.background = color;
}

//DOM
// var caja = document.getElementById('caja');
var caja = document.querySelector('#caja')
caja.innerHTML= "nueva ajca";
caja.style.background="blue";
caja.className = "gol"
console.log(caja)

// conseguir elemento por tag
var todosDiv = document.getElementsByTagName('div')
todosDiv[2].style.background="green"
var text = todosDiv[2].textContent;
var text = todosDiv[2].innerHTML = "Estoy seleccionado";
console.log(text)
console.log(todosDiv)

//for each no es para code html
// todosDiv.array.forEach((element,index) => {
    // var parrafo = document.createElement('p');
    // var texto = document.createTextNode(element);
    // parrafo.appendChild(texto)
    
    
// });
for (const valor in todosDiv) {
   if(typeof todosDiv[valor].textContent =='string'){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(todosDiv[valor].textContent);
    parrafo.prepend(texto)
    document.querySelector("#miseccion").prepend(parrafo)
}
}

//find elements for class css

var divRed = document.getElementsByClassName('red');

var div ; 
for(div in divRed){
    // if(typeof divRed[div] =="string"){
    //     divRed[div].background= "Red"
    // }
    if(divRed[div].className =="red"){
        divRed[div].style.background= "red"
    }
}
var divRed = document.getElementsByClassName('yellow');

var div ; 
for(div in divRed){
    // if(typeof divRed[div] =="string"){
    //     divRed[div].background= "Red"
    // }
    if(divRed[div].className =="yellow"){
        divRed[div].style.background= "yellow"
    }
}

