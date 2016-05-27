const express = require('express')
const app = express();
const path = require("path");
const db = require('./db.js')
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/api/add-request', function (req, res) {
  console.log(req)
});

app.get('/api/users', function (req, res) {
  db.find(function (err, users) {
    if (err) return console.error(err);
    res.json(users)
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 