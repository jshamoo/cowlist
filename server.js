const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const db = require('./db');

const upload = multer();

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static('public'))

const port = '3000';
app.listen(port, () => console.log(`Server is running, listening on port:${port}`));

app.get('/cows', (req, res) => {
  //console.log(req.body);
  var queryString = `SELECT * FROM cows;`;
  db.query(queryString, (err, results) => {
    if (err) throw (err);
    res.send(results);
  });
});

app.post('/create', upload.none(),(req, res) => {
  // console.log(req.body);
  var queryString = `INSERT INTO cows (name, description) VALUES (?, ?)`;
  db.query(queryString, [req.body.name, req.body.description], (err) => {
     if (err) throw (err);
     res.sendStatus(201);
  });
  //res.sendStatus(200);
});

app.put('/update/:id', (req, res) => {
  // console.log(req.body);
  var queryString = `UPDATE cows SET name=? WHERE id in (WHERE)`;
  // db.query(queryString, [req.body.name, req.body.description], (err) => {
  //   if (err) throw (err);
  //   res.sendStatus(201);
  // });
  res.sendStatus(200);
});
