// getting started With Ejs templets with expreess using ejs to views folder
// dynamic content pass

const express = require('express');
const path = require('path');
const app = express();
app.use('/public',express.static(path.join(__dirname,'static')));

app.set('view engine','ejs'); //
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery}});
});
app.listen(3000);