// deleting creating file system module
const fs =  require('fs');
fs.mkdir('tut',(err)=>{
    if(err){
    console.log(err)
    }else
    console.log('Successfully  created in the file')
    fs.rmdir('tut',(err))

})
// read dir
fs.readdir('example',(err,files)=>{
    // if err ,else file
})