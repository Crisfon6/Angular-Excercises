'use strict'

var express= require('express');
var bodyParser = require('body-parser');

var app = express();

//Load files routes

//middlewares
//methods que se ejecutan antes 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//routes
app.post('/test/:id',(req,res)=>{
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);
    
    
    
    res.status(200).send({
        message: 'Hola mundo desde api'
    });
});
app.get('/test',(req,res)=>{
    res.status(200).send({
        message: 'Hola mundo desde api'
    });
});
app.get('/',(req,res)=>{
    res.status(200).send(
        "<h1>MAin page</h1>"
        );
});

//export
module.exports = app;