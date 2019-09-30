const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = '3000';
app.listen(port, () => console.log(`Server is running, listening on port:${port}`));

app.get('/api/cows', (req, res) => {
  var queryString = `SELECT * FROM cows;`;
  db.query(queryString, (err, results) => {
    if (err) throw (err);
    res.send(results);
  });
});
