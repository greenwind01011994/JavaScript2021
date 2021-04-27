const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log('Found the following records');
      console.log(docs);
      callback(docs);
    });
  };

  const updateDocument = function(db, callback) {
      // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a: 2 }, { $set: { b: 1 } }, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log('Updated the document with the field a equal to 2');
        callback(result);
    });
  };

  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Delete document where a is 3
    collection.deleteOne({ a: 3 }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log('Removed the document with the field a equal to 3');
      callback(result);
    });
  };
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

    findDocuments(db, function() {
        client.close();
      });
});