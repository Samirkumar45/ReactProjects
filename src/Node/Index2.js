const express = require('express');
const path = require('path');
const app = express();

const designPath = path.join(__dirname, '/Design');

app.set('view engine', 'ejs');
app.get('', (_, res) => {
  res.sendFile(`${designPath}/index.html`);
});

app.get('/help', (_, res) => {
  res.sendFile(`${designPath}/help.html`);
});

app.get('/About', (_, res) => {
  res.sendFile(`${designPath}/About.html`);
});

app.get('/profile', (_, res) => {
  const user = {
    name: 'samir',
    emailid: 'Samirjana343@gmail.com',
    contact: '64837567945',
    skills: ['PHP', 'C', 'C++', 'Java', 'C#'],
  };
  res.render('profile', { user });
});

app.listen(3000);
