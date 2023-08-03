const express = require('express');
const EventEmitter = require('events');
const app = express();
const event  = new EventEmitter() 


let count  = 0;

event.on('countApi',( )=>{
    console.log("event called ",count);
    count++;
})

app.get("/",(req,res)=>{
    res.send('api / called');
})

app.get("/update",(req,res)=>{
    res.send('update api  called');
})


app.get("/home",(req,res)=>{
    res.send('home api   called');
    event.emit('countApi'); // how many time me search api , we test this into postman
})

app.listen(3000,(err)=>{
     console.log("listen to the port")
});

console.log("hello ") 



// EvenEmmit mean how many time on api is call and click we count throught event emmiter store in db