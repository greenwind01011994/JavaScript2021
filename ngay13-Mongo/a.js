//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/local';

MongoClient.connect(url)
.then(db => {
    const test = db.collection('test');
    return test.find().toArray();
})
.then(result => console.log(result))
.catch(err => console.log(err.message))