const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("hello world from nodejs");
        res.end();
    }
    else
   res.write("useing some other server");
   res.end()
});
server.listen(3000);