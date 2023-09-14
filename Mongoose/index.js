// why we use mongoose we already have mongodb beacuse  in mongodb there no limition  we cannot apply validation 5 felid only data insert
// mongoose have sechema and model  1 => lecture model =>  validation schema lgata hai model connct to the mongodb
// number and string value validation lga skte hai  field 
const mongoose = require('mongoose');

const main = async() =>{
    await mongoose.connect('mongodb://localhost:27017/deepak');

    const ProductSchema = new mongoose.Schema({
        name:String,
        age:Number,
        
    });

        const ProductsModel  = mongoose.model('products',ProductSchema);
        let data = new ProductsModel({name:"Prince kumar",age:22});
        
        let result = await data.save();
        console.log(result);
}
main();


// lec 1

