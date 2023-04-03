const express = require('express');
const mongoose = require('mongoose');
// const app = express();
// const mydb = async () => {
//   mongoose.connect('mongoose://localhost:27017/Samir');

//   const proSchema = new mongoose.Schema({});
//   const pro = mongoose.model('people', proSchema);
//   const data = await pro.find();
//   console.warn(data);
// };

// app.listen(3000);

const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'Student';
const client = new MongoClient(url);

async function getdata() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('stuinfo');

  let response = await collection.find({}).toArray();
  console.log(response);
}
getdata();
