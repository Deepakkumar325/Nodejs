const express = require('express')
const dbConnect = require('./Mongoconnect8');
const app = express();
// send data form postman
app.use(express.json());

app.get('/', async(req,resp)=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   console.log(data);
       resp.send(data) // api send
});


// this below function method will help you to send data from the postman  get the terminal 
// app.post('/',(req,resp)=>{
//     console.log(req.body)

//     resp.send({name:"Aman"});
// })

// this function use to postman through send new data using api and  get and insert the mongodb
app.post('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
})


app.listen(5000,(Error)=>{
    console.log(`listen to the port ${5000}`)
})







//get => when api through data read use get method
// put => put use to update data through api
// post => when insert data through api
// delete => when data delete