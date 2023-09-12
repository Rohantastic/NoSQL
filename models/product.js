const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection('products')
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb(); // Obtain the db reference here
    return db.collection('products')
      .find()
      .toArray()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
        throw err; // Throw the error to handle it in the calling code
      });
  }

  static findById(prodId){
    const db = getDb();
    return db.collection('products').find({_id: new mongodb.ObjectId(prodId)}).next().then((result)=>{
      console.log(result);
      return result;
    }).catch((err)=>{
      console.log(err);
    });
  }
}

module.exports = Product;
