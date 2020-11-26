"use strict"

$(document).ready(function(){
    
    reloadLinks();
    $("#add_button")
    .removeAttr("disabled")
    .click(function(){
    // $("#menu").html$('<li><a href = "'+$("#add_link").val()+'"></a></li>')
    $("#menu").prepend($('<li><a href = "'+$("#add_link").val()+'"></a></li>'));
        reloadLinks();
        $("#add_link").val('')
    })

    function    reloadLinks(){
        $('a').each(function(index){
            var that = $(this);
            var enlace = that.attr("href")
            that.attr('target','blank')
            // that.removeattr("target")

            that.text(enlace);  
        }); 
    }
   
})