'use strict'

$(document).ready(()=>{
    
    //SLECTORS ID
    var red = $("#red").css("background","red")
        .css("color","white")
    var yellow = $("#yellow").css("background","yellow")
    .css("color","black")
    var green = $("#green").css("background","green")
    .css("color","white")
    console.log(red)

    //SELECTORS CLASS
   
    
    $('p').css("cursor","pointer")
    $(".sinBorde").click(function(){
        
        console.log("me has dado clcick")
        $(this).toggleClass("zebra")
    })
    //SELECTS TAGS
    var p = $('p');
    console.log(p)
    p.click(function(){
        $(this).toggleClass("zebra")
    })

    //SELECTORS ATRIBUTES
    $('[title="Google"]').css('background','#ccc')
    $('[title="Facebook"]').css('background',"blue").css("color","white")

    //OTROS
    $('p, a').addClass('margen-sup');

     var busqueda = $("#caja .resaltado")
    var busqueda = $("#caja").find("#Element2").parent()
    //PARENT ES COMO UN CD ..

    console.log(busqueda)

})