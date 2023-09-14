const express = require('express')
const dbConnect = require('./Mongoconnect8');
const app = express();


app.get('/', async(req,res)=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   console.log(data);
//    res.send({name:"Deepak"})
       res.send(data) // api send


});

app.listen(5000,()=>{
    console.log("listen to the port ${5000}")
})


//get => when api through data read use get method
// put => put use to update data through api
// post => when insert data through api
// delete => when data delete







// make api and get data 
// test with postman 