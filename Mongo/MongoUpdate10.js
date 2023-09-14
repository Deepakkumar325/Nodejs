const dbConnect = require('./Mongoconnect8')

const updateData = async()=>{
    let data = await dbConnect();
    let result = await data.updateOne({
        name:"Aditya"},{$set:{Eduction:"Adiya Birala Intermidate College",age:22}});
    // let result = await data.deleteMany() // same name all data delete
    // let result = await data.deleteOne({name:"deepak"}); // one data delete;
    console.warn(result);

}
updateData()

// if same name ke two person hai then we we use to updateOne what would be happen it 
// only change first persone value

// update change all the value 
//
// what if oprate delete function in database  from vscode
// 5 line change let result = await  data.deleteMany({name:''})
 