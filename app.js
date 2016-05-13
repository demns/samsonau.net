var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/styles/style.css', function(req, res){
  res.sendFile(__dirname + '/public/style.css');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 1337, function () {
  console.log('Example app listening on port 1337!');
});

module.exports = app;

