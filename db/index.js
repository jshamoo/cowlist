const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cowlist'
});

connection.connect();

module.exports = connection;
