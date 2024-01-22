// const http = require('http');


// http.createServer((req, res)=> {
//     res.write("<h1>Hello My Name Is Adil...</h1>")
//     res.end();
// }).listen(4500);

const http = require('http');

http.createServer((req, resp)=>{
    resp.write("My Name is Syed Adil Ahmed and i am a Node.js Developer")
    resp.end();
}).listen(3500);

