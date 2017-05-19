var express = require('express');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

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


wss.on('connection', function connection(ws) {
  console.log('here');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

app.listen(process.env.PORT || 1337, function () {
  console.log('Example app listening on port 1337!');
});

module.exports = app;
