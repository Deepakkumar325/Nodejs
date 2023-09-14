const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
const database = 'deepak';

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return  db.collection('products');
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

// export function in other file
module.exports = dbConnect;