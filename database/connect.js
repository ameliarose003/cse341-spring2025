const { MongoClient } = require('mongodb');
require('dotenv').config();
 
let _db;
 
const initDb = () => {
  if (_db) {
    console.log('DB already initialized');
    return Promise.resolve(_db);
  }
 
  return MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client.db(); // NOTE: use `.db()` here
      console.log('MongoDB connected');
      return _db;
    });
};
 
const getDb = () => {
  if (!_db) {
    throw new Error('Db not initialized');
  }
  return _db;
};
 
module.exports = { initDb, getDb };
 