const express = require("express");
require('./config')
// we get the mongoose conntection once you go through
const Product = require('./mongSepreateFile');

const app = express();

app.use(express.json()) // convert data into json file

app.post("/create", async (req, res) => {
    let data = Product(req.body);
    let result = await data.save();
    console.log(req.body)
    res.send(result);
})
// get  method using mongose
app.get("/list", async (req, res) => {
    let data = await Product.find()
    res.send(data);
})
// delete method mongoose

app.delete("/delete/:_id", async (req, res) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params)
    res.send(data);
})

// put method

app.put("/update/:_id", async (req, res) => {
    console.log(req.params);
    let data = await Product.updateOne(
        { name: "Prince Kumar" },
        {
            $set: { age: 20 }
        }
    )
    res.send(data);
})




app.listen(5000, (err) => {
    console.log("listen at the port 5000")
});

// lec 4