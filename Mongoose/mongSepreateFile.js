const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
    Education:String,
});
module.exports = mongoose.model('products',productSchema);

// In  this file we code establish connect  with mongoose and write the data filed in which we store the value

// for that we don't write again and again and multiple file through import
 
//  lec 3 part of 