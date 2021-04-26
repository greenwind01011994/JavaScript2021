const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url)
.then(db => {
    const test = db.collection('users');
    return test.find().toArray();
})
.then(result => console.log(result))
.catch(err => console.log(err.message))