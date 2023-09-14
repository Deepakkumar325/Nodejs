const express = require('express');
const app = express();
app.use(express.json());

app.get("/home",(req,res)=>{
    res.json("Home Page");
})
// const check = (req,res,next)=>{
//      const home = req.body.home
//      if(req.includes(home)){
//         next()
//      }
//      else{
//         console.log("this protected")
//         res.status(401).json("This Home Page is Protected")
//      }
// }

const check = (e)=>{
   return (req,res,next)=>{
    const home = req.body.home;
    if(e.includes(home)){
        next()
    }
    else{
        return res.status(400).json("You dont have premission")
    }
   }
}

app.get('/course/grades',check(['renukoot']),(req,res)=>{
    res.json({
        id:1,
        deepak:100,
        rollno:20,
        home:'renukoot',
    })
})


app.get('/course/:number',(req,res)=>{
    const courseNumber = req.params.number;
    res.json(`You have premission to see Course ${courseNumber}`)
})


app.listen(3000,()=>{
    console.log('server listen at the port 3000 ')
})