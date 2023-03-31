const express = require('express');
const path = require('path');
const app = express();

const designPath = path.join(__dirname, '/Design');

app.get('', (_, res) => {
  res.sendFile(`${designPath}/index.html`);
});

app.get('/help', (_, res) => {
  res.sendFile(`${designPath}/help.html`);
});

app.get('/About', (_, res) => {
  res.sendFile(`${designPath}/About.html`);
});

app.listen(3000);
