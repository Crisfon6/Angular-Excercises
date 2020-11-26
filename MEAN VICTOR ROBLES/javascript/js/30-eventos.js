'use strict'

window.addEventListener('load',()=>{

    
    //EVENT
    var boton = document.querySelector('#btn');
    
    var btnColor = document.querySelector('#colorbtn');
     
    function cambiaColorBtn() {
        console.log("Me has dado click")
        if (btnColor.style.background == "red") {
            btnColor.style.background = "blue"
        } else {
    
            btnColor.style.background = "red";
        }
    }
    
    var catchBtn = document.querySelector("#btnCatch");
        function cambiarColor(){
            
            console.log("Me has dado click")
            if (catchBtn.style.background == "red") {
                catchBtn.style.background = "blue"
            } else {
        
                catchBtn.style.background = "red";
            }
        }
        var mouseOver = document.querySelector("#mouseOver");
        function cambiarColorMover(){
            
            console.log("has pasado pormi")
            if (mouseOver.style.background == "red") {
                mouseOver.style.background = "blue"
            } else {
        
                mouseOver.style.background = "red";
            }
        }
    //Onclick
    catchBtn.addEventListener('click' ,()=>{
        
        catchBtn.style.border = "10px solid black";
        cambiarColor()
        
    }       );
    //Mouse over
    mouseOver.addEventListener('mouseover' ,()=>cambiarColorMover());
    
    mouseOver.addEventListener('mouseout',()=>{
        mouseOver.style.background = 'Black'
    })


//Focus
var input = document.querySelector("#nombre")

input.addEventListener('focus',()=>{
    console.log("estas dentro del input")
});

//Blur
input.addEventListener('blur',()=>{
    console.log("estas fuera     del input")
})
// KeyDown
input.addEventListener('keydown',(event)=>{
    console.log("[KeyDown]pulsando teclas", String.fromCharCode(event.keyCode))
})
//KeyPress
input.addEventListener('keypress',()=>{
    console.log("[KeyPres]Tecla presionada", String.fromCharCode(event.keyCode))
})
//KeyUp
input.addEventListener('keyup',()=>{
    console.log("[KeyUpp]Tecla levantada", String.fromCharCode(event.keyCode))
})
})