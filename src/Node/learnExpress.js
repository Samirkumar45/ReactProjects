const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send(
    '<h1> This is homepage</h1><a href="/about"/> Go to About us Page..</a>'
  );
});

app.get('/about', (req, res) => {
  res.send(`
    <input type="text" placeholder="User Name" value="${req.query.name}"/>
    <button> Click here </button>
    `);
});

app.get('/info', (req, res) => {
  res.send([
    {
      name: 'samir',
      email: 'Samir453@gmail.com',
    },
    {
      name: 'Rahul',
      email: 'Rahul234@gmail.com',
    },
  ]);
});
app.listen(3000);
