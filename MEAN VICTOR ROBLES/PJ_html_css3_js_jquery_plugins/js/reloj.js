$(document).ready(function(){
    //selector-theme
    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
        localStorage.setItem("theme", "css/green.css")
    })
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
        localStorage.setItem("theme", "css/red.css")
    })
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
        localStorage.setItem("theme", "css/blue.css")
    })

    // ver si sirve windows.performance en el browser
    // if (window.performance) {
    //     console.info("window.performance works fine on this browser");
    //   }
    // esto es para poner el tema que puso el user
    if (performance.navigation.type == 1) {

        var themeActual = localStorage.getItem("theme")
        theme.attr("href", themeActual);
    }

    //Scroll arriba de la web
    $(".subir").click(function (e) {
        e.preventDefault();
        $("html ,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })
    //login falso
    $("#login form").submit(function () {
        var name = $("#name").val();
        localStorage.setItem("name", name);
    })
    var name = localStorage.getItem("name");
    if (name != null && name != "undefined") {
        var about_p = $("#about p")
        about_p.html(" <strong>Bienvenido " + name + "</strong>");
        about_p.append("<a href='#' id='logout'>Cerrar Sesion</a>")
        $("#login").hide()
        $("#logout").click(function () {
            localStorage.removeItem("name");
            location.reload();
        })
    }
    // reloj
    setInterval(function(){
        var reloj = moment().format("h:mm:ss ")
        $("#reloj").html(reloj);
    },1000)
   
})