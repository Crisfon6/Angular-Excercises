'use strict'

$(document).ready(function(){

    //Mouse over y Mouse out
    var caja = $('#caja');
    caja.mouseover(function(){
        $(this).css("background","red");
    });
    caja.mouseout(function(){
        $(this).css("background","yellow");
    });

    //hover
    var cajaHover = $('#cajaHover');
    function cambiaRojo(){
    
        $(this).css("background","red");
     
}
function cambiaVerde(){
   
    $(this).css("background","green");
    
}
    cajaHover.hover(cambiaRojo,cambiaVerde);

    //click doble click
    cajaHover.click(function(){
        $(this).css("font-size","20px")
    })
    cajaHover.dblclick(function(){
        $(this).css("font-size","40px")
    })
    //FOCUS Y BLUR
    var datos = $("#datos")
    var nombre = $("#nombre")

    nombre.focus(function(){
        $(this).css("border","2px solid green")
    })
    nombre.blur(function(){
        $(this).css("border","2px solid transparent")
        var data = $(this).val()
        datos.text(data).show()
    })
    //mouseDown y mouseUp
    datos.mousedown(function(){
        $(this).css("border-color","yellow")
    })
    datos.mouseup(function(){
        $(this).css("border-color","green")
    })
    //Mousemove
    $(document).mousemove(function(){
        var sigueme = $("#sigueme");
        console.log(event.clientX);
        console.log(event.clientY);
        $("body").css("cursor","none");
        sigueme.css("left",event.clientX)
            .css("top",event.clientY);
    })

})