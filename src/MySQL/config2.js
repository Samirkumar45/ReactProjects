const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

con.connect((err) => {
  if (err) {
    console.warn('connection error');
  }
});
module.exports = con;
