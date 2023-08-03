const express = require('express');
const phone = require('./data');
const app = express();

app.get('/',(req, res)=>{
    res.send('<a href="/home" ><h1>home Page </h1></a>')
})

app.get('/home/:name',(req, res)=>{
    res.json(phone);
    console.log(req.params);
})

// if find one data through id
app.get('/api/home/:id',(req,res)=>{
    // destructing
    const {id} = req.params;
    console.log(id);

    const singleproduct = phone.find((item)=> item.id == Number(id));
    

    res.json(singleproduct)
})
;
app.listen(3000);