const express = require('express');
require('./config');
const student = require('./monguapi');

const app = express();
app.use(express.json());
app.post('/create', async (req, res) => {
  let data = new student(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.get('/list', async (req, res) => {
  let data = await student.find();
  res.send(data);
});

app.delete('/delete/:_id', async (req, res) => {
  console.log(req.params);
  let data = await student.deleteOne(req.params);
  res.send(data);
});

app.put('/update/:_id', async (req, res) => {
  console.log(req.params);
  let data = await student.updateOne(req.params, { $set: req.body });
  res.send(data);
});
app.listen(3000);
