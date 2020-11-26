$(document).ready(function(){
    //LOAD
    // $("#datos").load("https://reqres.in/")

    //GET Y POST
    $.get("https://reqres.in/api/users",{page:2},function(response){
        response.data.forEach((element ,index) => {
            $("#datos").append("<p>"+element.first_name+"</p>")
        });
 
    })
    

    $("#form").submit(function(e){
e.preventDefault()
        var user = {
            name: $('input[name="name"]').val(),
           ocupation:    $('input[name="ocupation"]').val()
       }
      
    //    $.post($(this).attr("action"),user,function(response){
    //    console.log(response);
       
    //    }).done(function(){
    //        alert("se añadio correctamente")
    //    })

       $.ajax({
           type: "POST",
        //    dataType: "json",
        //    contentType: "application/json",
           url: $(this).attr("action"),
           data: user,
           beforeSend: function(){
               console.log("enviando...")
           },
           success: function(response){
               console.log(response);
               
           },
           error: function(e){
               console.log("ha ocurrido un error ", e);
               
           },
        //    timeout: 100
       });

    })
})