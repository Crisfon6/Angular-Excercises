// const http = require('http');

// http.createServer((req,res)=>{
// res.end("HEllo workd");
// }).listen(4000);
// esto es nodejs pruro


const express = require('express');
const app = express();
const morgan = require('morgan');
const ejs = require('ejs');
//requiriendo routes
const routes = require('./routes');
const routesApi = require('./routes-api');
//settings
app.set('appName','My first server');
app.set('views',__dirname+"/views")


app.set('view engine','ejs');

//middlewares
app.use(morgan('combined'));
//routes
app.use(routes);
app.use('/api',routesApi);

app.get('*',(req,res)=>{
    res.end('No encontrado');
});


app.listen(3000,()=>{
    console.log("Servidor funcionando");
    console.log('app name :'+app.get('appName'));
    
    
})