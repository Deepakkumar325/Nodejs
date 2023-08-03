const express = require("express");
const app = express();
const port = 5000;


 app.use(express.urlencoded({extended:true}));

 const  teacherhandler = require('./teacher');
 app.use('/teacher',teacherhandler);
 

const student = require("./student");
 app.use('/student',student); 


app.get('/',(req,res)=>{
    res.send(student)
})

app.listen(port,()=>{
    console.log("Server at port running ",port);
})