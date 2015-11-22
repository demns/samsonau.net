// require('babel-core/register');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.set('port', process.env.PORT || 1337);

var server = app.listen(app.get('port'), function onStart() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Express server listening at http://%s:%s', host, port);
});

