const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('Hello this is Homepage');
});

app.get('/About', (req, res) => {
  res.send('Hello this is About us');
});

app.get('/contact', (req, res) => {
  res.send('Hello this is Contact');
});

app.get('/login', (req, res) => {
  res.send('Hello this is login page');
});

app.listen(5000);
