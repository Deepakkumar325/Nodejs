const express = require("express");
const router = express.Router();
 

const student = [
       "deepak",
       "kriti",
       "Aman",
]

router.get('/',(req,res,next)=>{
    res.send(student);

})
 
module.exports  = router;