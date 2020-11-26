$(document).ready(function(){
    console.log("listo");

    //mover elemento page
    $(".elemento").draggable();

    //resizable
    $(".elemento").resizable();

    //lista seleccionable
    // $(".listaSeleccionable").selectable();

    //listar y ordenar elements
    $(".listaSeleccionable").sortable(
        {update: function(event,ui){
            console.log("Ha cambiado la lista");
            
        }}
    );
    //Drop
    $("#elemento-movido").draggable()
    $("#area").droppable({
        drop: function(){
            console.log("Haz movido algo dentro");
            
        }
    });
    // efectos
    $("#mostrar").click(function(){
        // $(".caja-efectos").fadeToggle();
        // $(".caja-efectos").toggle("explode");
        // $(".caja-efectos").toggle("blink");
        // $(".caja-efectos").toggle("slide");
        // $(".caja-efectos").toggle("drop");
        // $(".caja-efectos").toggle("fold");
        // $(".caja-efectos").toggle("puff");
        // $(".caja-efectos").toggle("scale");
        $(".caja-efectos").toggle("shake",{
            
        },4000);
    })
    $(document).tooltip();

    //dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    })
    
    //DatePicker
    $("#calendar").datepicker();

    //Tabs
    $("#pestanas").tabs()

})