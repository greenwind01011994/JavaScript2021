//const mongoClinent = require('mongodb').mongoClinent;
const {mongoClinent} = require('mongodb');

const url = 'mongodb://localhost:27017/shop'

MongoClient.connect(url)
.then(db => {
    const words = db.collection('words');
    words.find().toArray();
})
.then(result => console.log(result))
.catch(err => console.log(err.message))