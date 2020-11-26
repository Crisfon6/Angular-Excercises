$(document).ready(function () {
    

    //Slider
    $(".bxslider").bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true,
        pager: true
    })
    //Post
    var posts = [
        {
            title: "Prueba de titulo 1 ",
            date: "publicado el dia "+ moment().weekday()+" de "+ moment().format("MMMM")+" de "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipis1icing elit. Ipsa debitis pariatur ratione expedita, voluptatibus qui quisquam eius, quidem minima odit, quae totam impedit suscipit ex dignissimos velit quibusdam. Accusamus, veniam? Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sinoque tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", lascuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
        },
        {
            title: "Prueba de titulo 2 ",
            date: "publicado el dia "+ moment().weekday()+" de "+ moment().format("MMMM")+" de "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa debitis pariatur ratione expedita, voluptatibus qui quisquam eius, quidem minima odit, quae totam impedit suscipit ex dignissimos velit quibusdam. Accusamus, veniam? Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sinoque tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", lascuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
        },
        {
            title: "Prueba de titulo 3",
            date: "publicado el dia "+ moment().weekday()+" de "+ moment().format("MMMM")+" de "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa debitis pariatur ratione expedita, voluptatibus qui quisquam eius, quidem minima odit, quae totam impedit suscipit ex dignissimos velit quibusdam. Accusamus, veniam? Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sinoque tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", lascuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
        }
    ]
    var post = []
    posts.forEach((item,index)=>{
        post=  post+`
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">
            Leer mas
        </a>
    </article>
        `;
        
    })
    $("#posts").append(post);

    //selector-theme
    var theme = $("#theme");
    
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
        localStorage.setItem("theme","css/green.css")
    })
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
        localStorage.setItem("theme","css/red.css")
    })
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
        localStorage.setItem("theme","css/blue.css")
    })

    // ver si sirve windows.performance en el browser
    // if (window.performance) {
    //     console.info("window.performance works fine on this browser");
    //   }
    // esto es para poner el tema que puso el user
    if (performance.navigation.type == 1) {
        
        var themeActual = localStorage.getItem("theme")
        theme.attr("href",themeActual);
      }

      //Scroll arriba de la web
      $(".subir").click(function(e){
e.preventDefault();
          $("html ,body").animate({
              scrollTop: 0
          },700);
          return false;
      })
      //login falso
$("#login form").submit(function(){
    var name = $("#name").val();
    localStorage.setItem("name",name);
})
var name = localStorage.getItem("name");
if(name!=null && name !="undefined"){
    var about_p = $("#about p")
    about_p.html(" <strong>Bienvenido "+ name+"</strong>");
    about_p.append("<a href='#' id='logout'>Cerrar Sesion</a>")
    $("#login").hide()
        $("#logout").click(function(){
            localStorage.removeItem("name");
            window.reload()
        })
}

})
