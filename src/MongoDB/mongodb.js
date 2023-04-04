const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'Student';
const client = new MongoClient(url);

async function getconnection() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection('stuinfo');
}

module.exports = getconnection;
