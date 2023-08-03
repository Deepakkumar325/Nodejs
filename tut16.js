const express = require('express');
const app = express();

const router = express.router();

// const packjson = [
//     {
//     "name":"ExpressRouter",
//     "age":10,
//     "start":"node-server-js",
//     },
//     {
//         "dependencies":{
//             "express":"^4.12.3",
//         }

//     }
// ]

router.get('/',function(req,res){
    res.json({"message":"hello World"});
});
app.use('/api',router);

app.listen(3000,function(){
    console.log("Live at port 3000")
});

