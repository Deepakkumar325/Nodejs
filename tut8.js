// pipes and pipe chaining(eadable,writeable,and transform stram)
const fs = require('fs');
const readStream = fs.createReadStream('example.txt','utf-8');
const writeStream = fs.createWriteStream('example2.txt','utf-8');  // same data write in next file

readStream.pipe(writeStream)

// here i skip ... 
