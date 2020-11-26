$(document).ready(function () {
    $("#caja").hide();
    $("#ocultar").hide();
    var caja = $("#caja");
    $("#mostrar").click(function () {
        // $("#caja").show("fast");
        // $("#caja").fadeIn("slow");
        caja.fadeTo("slow", 1);
        $("#ocultar").show();
        $(this).hide();
    })
    $("#ocultar").click(function () {
        // caja.hide("fast");
        // caja.fadeOut("slow");
        caja.fadeTo("slow", 0);
        $("#mostrar").show();
        $(this).hide();
    })

    $("#teu").click(function () {
        caja.fadeToggle('fast',function(){
            console.log("Accion")
        })
        // caja.slideToggle('slow')
    })
    $("#animar").click(function () {
        caja.animate({
            marginLeft: "500px",
            fontSize: "40px",
            height: "150px"

        }, 'slow')
            .animate({
                borderRadius: "900px",
                marginTop: "80px"

            }, "slow")
            .animate({
                marginLeft: "0px",
                borderRadius: "0px",

            }, "slow")
            .animate({
                marginTop: "0px"
            })
    })
})