'use strict'

window.addEventListener("load",()=>{
    var form = document.querySelector("#form");
    form.addEventListener("submit",()=>{
        var file = document.querySelector("#file").value;
        if(file.length>=1){
            localStorage.setItem(file,file)
        }
        
    })
var ul = document.querySelector("#filmsList")
    for (const key in localStorage) {
        if (typeof(localStorage[key])=="string") {
            var li = document.createElement("li");
            li.append(localStorage[key])
            ul.append(li)
        }
    }
    
    var removeFile = document.querySelector("#removeForm");
    removeFile.addEventListener("submit",()=>{
        var Rfile = document.querySelector("#removeFile").value;
        if(Rfile.length>=1){
            localStorage.removeItem(Rfile)
        }
        
    })
});