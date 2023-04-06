const express = require('express');
const getconnection = require('./mongodb');
const app = express();
app.use(express.json());

// app.put('/:stname', async (req, res) => {
//   let dbcon = await getconnection();
//   let result = await dbcon.updateOne(
//     { stname: req.params.stname },
//     { $set: req.body }
//   );
//   res.send(result);
// });

// app.delete('/:stname', async (req, res) => {
//   console.log(req.params.id);
//   let dbcon = await getconnection();
//   let result = await dbcon.deleteOne({ stname: req.params.stname });
//   res.send(result);
// });

app.propfind('/', async (req, res) => {
  let dbcon = await getconnection();
  let records = await dbcon.find({ stname: 'Meet' }).toArray();
  console.log(records);
  res.send(records);
});

app.listen(3000);
