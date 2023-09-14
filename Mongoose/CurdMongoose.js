
// save data in mongodb

const mongoose = require('mongoose');

const save = async() =>{
    await mongoose.connect('mongodb://localhost:27017/deepak');
    const ProductSchema = new mongoose.Schema({
        id:Number,
        name:String,
        age:Number,
        Education:Number,
    });
  const save = async () => {
      const ProductsModel  = mongoose.model('products',ProductSchema);
      let data = new ProductsModel({
      name:"Ayush kumar",
      age:22,
      id:10,
      Education:"Gla University Mathura",

    });
      
      let result = await data.save();
      console.log(result);
  }
}
// save();

// update MongoDB  through mongoose
const updateInDB = async() =>{
    const Products = mongoose.model('products',ProductSchema);
    let data = await Products.updateOne(
        {name : "Ayush"},
        {
            $set:{age:17}
        }
    )
    console.log(data);

}
updateInDB();

// deleteInDB

const deleteInDB = async () =>{
    const Products = mongoose.modelNames('products',ProductSchema);
    let data = await Products.updateOne({name:"Ayush kumar"});
    console.log(data);

}

deleteInDB();

// find in mongodb  all the data fetch  read same as

const findIndb = async () =>{
    const Products = mongoose.modelNames('products',ProductSchema);
    let data = Products.find({ name: "Ayush kumar" });
    console.log(data);

}
findIndb();

// we decide schema that our name, age two field data only enter hoga 



// lec 2



