// curd opeartion in the file 

const fs  = require('fs');
// creating file
fs.writeFile('example.txt','this is an exmple',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file Successfully created');
        fs.readFile('example.txt','utf-8',(err,file)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(file); // buffer file
            }
        })
    }
});


// rename file
fs.rename('example.txt','example1.text',(err)=>{
    if(err){
        console.log(err)
    }
    else
    console.log('Successfully rename the file')
})
        
// update file 
fs.appendFile('example.text','Some data being appended',(err)=>{
  
        if(err){
            console.log(err)
        }
        else
    console.log('Successfully update data in the file')


})

// delete
fs.unlink('example.text',(err)=>{
        if(err){
            console.log(err)
        }
        else
        console.log('Successfully delete data in the file')
            
})