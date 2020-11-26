const http = require('http');
const handleServer = (req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>hola mundo</h1>');
    res.end()};
const server = http.createServer(handleServer);
server.listen(3000,()=>{
    console.log("servidor en el puerto 3000");
    
})