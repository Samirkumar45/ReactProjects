const express = require('express');
const app = express();
const con = require('./config2');
app.use(express.json());
app.get('/', (req, res) => {
  con.query('select * from studentinfo', (err, result) => {
    if (err) {
      res.send('table connection error');
    } else {
      res.send(result);
    }
  });
});
app.post('/', (req, res) => {
  const data = req.body;
  con.query('insert into studentinfo SET ?', data, (error, result) => {
    if (error) {
      res.send('error in connecting api');
    } else {
      res.send(result);
    }
  });
});
app.put('/:st_id', (req, res) => {
  const data = [
    req.body.stname,
    req.body.stcity,
    req.body.stphone,
    req.params.st_id,
  ];
  con.query(
    'update studentinfo SET stname=?,stcity=?,stphone=? where st_id=?',
    data,
    (error, result) => {
      if (error) {
        res.send('error in connecting api');
      } else {
        res.send(result);
      }
    }
  );
});
app.delete('/:st_id', (req, res) => {
  con.query(
    'delete from studentinfo where st_id=' + req.params.st_id,
    (error, result) => {
      if (error) {
        res.send('error in connecting api');
      } else {
        res.send(req.params.st_id);
      }
    }
  );
});

app.listen(3000);
