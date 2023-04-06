const express = require('express');
const getconnection = require('./mongodb');
const app = express();
app.use(express.json());

//Get Method
// app.get('/', async (req, res) => {
//   let dbcon = await getconnection();
//   let records = await dbcon.find().toArray();
//   console.log(records);
//   res.send(records);
// });

//Post Method
app.post('/', async (req, res) => {
  console.log(req.body);
  let dbcon = await getconnection();
  let result = await dbcon.insertOne(req.body);
  res.send(result);
});

app.listen(3000);
