const dbConnect  = require('./Mongoconnect8');





// onther way to find the mutiple data, do not make again mutiple connection from database

dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.warn(data);

    })
})
// console.warn(dbConnect())
 

// second way  get data fuction 

// const main = async ()=>{
//     let data = await dbConnect();
//     data =await data.find().toArray();
//     console.warn(data)
    
// } 
// main();




// and now we write 1 to 12 line of code in other file(he is our data base connectivety)
// and we import it for multiple file call   






// client =is  pe hame apna data rkhe hai isliye we called client