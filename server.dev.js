var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

var port = process.env.PORT || 1337;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

wss.on('connection', function connection(ws) {
  console.log('dev');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  var first = '<div><a href="mailto:dzmitrysamsonau@gmail.com">dzmitrysamsonau@gmail.com</a></div>' +
    '<div><a href="mailto:dzmitry_samsonau@epam.com">dzmitry_samsonau@epam.com</a></div>' +
    '<div><a href="https://www.facebook.com/dsamsonau">facebook.com/dsamsonau</a></div>' +
    '<div><a href="https://vk.com/demns">vk.com/demns</a></div>' +
    '<div><a href="https://www.linkedin.com/in/dzmitrysamsonov">linkedin.com/in/dzmitrysamsonov</a></div>' +
    '<div><a href="https://github.com/demns/samsonau.net">Link to this site on github</a></div>';

  var charPos = 0;
  var q = setInterval(function () {
    ws.send(first.charAt(charPos++));
    if (charPos >= first.length) {
      clearInterval(q);
    }
  }, 20);
});

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
