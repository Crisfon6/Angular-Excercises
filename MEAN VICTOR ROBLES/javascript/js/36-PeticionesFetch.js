"use strict"

window.addEventListener('load',()=>{
    //FETCH (ajax) y petciones a serviciones /api rest
    var div_users = document.querySelector("#users")
    var div_user = document.querySelector("#user")
    var div_profesor = document.querySelector("#profesor")
    getUsers()
        .then(data => data.json())
        .then(data => {
            listadoUsuarios(data.data)    
            return getInfo()
           
        }).then(data    => div_profesor.innerHTML=data)
            .then(()=>{ return getUser(2);}  )
            .then(data => data.json())
            .then(user=> {
                
                listarUsuario(user.data)
                
            })
            .catch(err => {
                alert("error en las peticiones :")
            });

        function getUsers(){
            return fetch("https://reqres.in/api/users/");
        }
        function getUser(id){
            return fetch("https://reqres.in/api/users/"+id);
        }
        function listadoUsuarios(users){
            users.map((user, i) =>{
                let nombre = document.createElement("p");
                nombre.innerHTML = user.id +" " + user.first_name+ " "+ user.last_name;
                div_users.append(nombre)
                let avatar = document.createElement("img");
                avatar.src =user.avatar;
                avatar.width = "100";
                div_users.append(nombre)
                div_users.append(avatar)
                document.querySelector(".loading").style.display ="none"
            })
        }
        function listarUsuario(user){
            
                let nombre = document.createElement("p");
                nombre.innerHTML = user.id+" " + user.first_name+ " "+ user.last_name;
                let avatar = document.createElement("img");
                avatar.src =user.avatar;
                avatar.width = "100";
                div_user.append(nombre)
                div_user.append(avatar)
                document.querySelector("#user .loading").style.display ="none"
            
        }
        function getInfo(){
            var profesor = {
                nombre: "CRisthian",
                apellidos: "Fonseca"
            };
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    var profesorString = JSON.stringify(profesor);
                    if(typeof profesorString != "string") return reject("error");
                    return resolve(profesorString);
                },3000)
               

            })
        }

});