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

  var first = '<a href="mailto:dzmitrysamsonau@gmail.com">dzmitrysamsonau@gmail.com</a>';
  var links = [first, first];

  for (var i = 0; i < links.length; i++) {
    var charPos = 0;
    setInverval(function() {
      ws.send(links[charPos++]);
    }, 100);
  }
});

app.listen(process.env.PORT || 1337, function () {
  console.log('Example app listening on port 1337!');
});

module.exports = app;
