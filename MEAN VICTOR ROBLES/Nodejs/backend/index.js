'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio',{ useNewUrlParser: true ,useUnifiedTopology: true})
    .then(()=>{
        console.log("SE conecto correctamente a la base de datos");
        //Server creation
        app.listen(port,()=>{
            console.log("Servidor corriendo correctamente in the port "+port);
            
        })


    }).catch(err=>{
        console.log("ERROR"+err);
        
    });
