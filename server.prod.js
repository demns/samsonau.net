var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/dist/bundle.js', function (req, res) {
  res.sendFile(__dirname + '/dist/bundle.js');
});

app.get('/styles/style.css', function (req, res) {
  res.sendFile(__dirname + '/public/style.css');
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 1337, function () {
  console.log('Example app listening on port 1337!');
});

module.exports = app;
