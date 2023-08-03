// why should Stream
// very large text file and also lages data aplication and made 
// readfile uses a buffer and it has capacity bytes but readStream is not

const fs = require('fs');
const readStream = fs.createReadStream('example.txt','utf-8');
readStream.on('data',(chunk)=>{
    console.log(chunk)
})