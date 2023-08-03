// wroking wiht Readable and Streams
const fs = require('fs');
const readStream = fs.createReadStream('example.txt','utf-8');
const writeStream = fs.createWriteStream('example2.txt','utf-8');  // same data write in next file

readStream.on('data',(chunk)=>{
    // console.log(chunk);  // read data 2 buffer
    writeStream.write(chunk)

})

