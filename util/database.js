const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db ;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://root:root@cluster0.ioata4v.mongodb.net/?retryWrites=true&w=majority').
  then((client)=>{
    console.log("Connected");
    db = client.db();
    callback();
  }).
  catch((err)=>{
    console.log(err);
    throw err;
  });
}

const getDb = () =>{
  if(db){
    return db;
  }
  throw "no databse found";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;