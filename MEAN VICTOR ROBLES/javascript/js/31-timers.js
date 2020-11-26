

// window.addEventListener('load',()=>{

//     //Timers

//     var tiempo = setInterval(()=>{
//         console.log('Set Interval ejecuntado')
//     }, 3000);
// })

window.addEventListener('load',()=>{
    var tiempo = setInterval(()=>{
        console.log("Set interval ejecutando")
        var  encabezado = document.querySelector("h1");
        if( encabezado.style.fontSize =="100px"){
            encabezado.style.fontSize ="50px";
        }else{
            encabezado.style.fontSize= "100px"
        }
        
       
    }, 1000)
    var time = setTimeout(()=>{
        console.log("Set interval ejecutando")
        var  encabezado = document.querySelector("h1").style.background="yellow";
       
        
       
    }, 500)
    var stop  = document.querySelector("#stop");
    stop.addEventListener("click",()=>{
        clearInterval(tiempo)
    })
})