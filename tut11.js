const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello world')

})

app.get('/example',(req,res)=>{
    res.send('Hitting exapmle route');

})
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params); // serach the router parameter of the url
    // console.log(req.params.age +" "+ req.params.name); // req query
    res.send(req.query) // "node ": " learn"  or http://localhost:3000/example/deepak/23/?node=learn&express=learn multiple query pass
   
    res.send('example with route params  '+req.params.age +" "+ req.params.name)

})
app.listen(3000);