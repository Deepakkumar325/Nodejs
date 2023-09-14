
module.exports =   reqFiltter = (req,resp,next) =>{

    if(!req.query.age){
        resp.send("Please provide your age")
    }
    else if(req.query.age<18){
        resp.send("<h1>Your Age is very Low</h1> ")
    }
    else{
        next()
    }
}

// http://localhost:3000/user/?age=30 => link write  

//sepreted file we query import another file