// put use to update data thought api  it is https method
const express = require('express')
const dbConnect = require('./Mongoconnect8');
const mongobd = require('mongodb')
const app = express();
// send data form postman
app.use(express.json());

app.get('/', async(req,resp)=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   console.log(data);
       resp.send(data) // api send
});


 
// this function use to  postman through we update data of the mongobd
app.put('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(

      //  {name:"Ankit"}   //when we write here what we update so it is static data 
    //   ,{$set:{age:10}}) 

    {name: req.body.name},  //  we update data from postman
    {$set:req.body})
    resp.send({result:"update"});
})



// delete data from postman
app.delete("/:id",async(req,resp)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await  data.deleteOne({_id:new mongobd.ObjectId(req.params.id)})
    resp.send(result);
})




app.listen(5000,(Error)=>{
    console.log(`listen to the port ${5000}`)
})
