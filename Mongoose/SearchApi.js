// Search Api mean we search data through into api 
const express = require("express");
require('./config')
// we get the mongoose conntection once you go through
const Product = require('./mongSepreateFile');
const app = express();

app.use(express.json())
app.get("/search/:key", async(req,res)=>{
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},  // search data from database
                {"age":{$regex:req.params.key}} 
            ]
        }
    );
    res.send("search done");
})

app.listen(8000);
