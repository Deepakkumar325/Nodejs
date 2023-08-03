const express = require('express');
const app = express()

// get/name/deepak 
app.get('/name/:name',(req,res,next)=>{
    if(req.params.name == 'john')
    {
        return res.send("Vaild Name");
    }
    else{
        next(new Error('Not vaild Name'));
    }
});

// error handler
app.use(function(err,req,res,next){
    console.log(err.stack);
    return res.status(500).send("Internal Server Occured");
})

app.listen(4000);
