// static file server to the broswer then we have static folder 
const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
   // const readStream = fs.createReadStream('./static/index.html')
   const readStream = fs.createReadStream('./static/example.json') // if load png change name

   res.writeHead(200,{'Content-type':'applicaton/json'}); // here..
   readStream.pipe(res);
}).listen(3000)
   




