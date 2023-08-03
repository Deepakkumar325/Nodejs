const express = require("express");
const router = express.Router();
 

const teacher = [
    
       "Anma sir",
    "Monu Sir",
    "Varun",

]

router.get('/',(req,res,next)=>{
    res.send(teacher);

})
router.post('/add',(req,res,next)=>{
    const{name} = req.body;
    // teacher.push(id);
    teacher.push(name);
    res.redirect('/teacher');
})

// router.put('/update/:id',(req,res)=>{
//     const id= parseInt(req.params.id);
//     const updatebook = req.body;
//     const index = update.find(book => book.id == id);
//    if(index !=-1) {
//      teacher.push(updatebook);

//     }
//     else{
//         res.status(400).json("Books Not Found!!")
//     }
     
// })
module.exports  = router;