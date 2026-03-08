//TODO use http modules to create a BACKEND server

//*http module is used to create a server which works on HTTP protocol
const http = require('http');

const server = http.createServer(function(request,respons){
    respons.end('Hello from Node js server')
});

server.listen(5000); // run your server
// url-http://local