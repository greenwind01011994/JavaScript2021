const  mongoClinent = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learning_mongo';

MongoClient.connect(url)
.then(db => {
    const tours = db.collection('tours');
    return tours.find({tourTags: 'wine'}, {tourName: 1}).toArray()
})
.then(result => console.log(result))
.catch(err => console.log(err.message))