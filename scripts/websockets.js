const WebSocket = require('ws');
const chalk = require('chalk');

const wss = new WebSocket.Server({ port: 3001 });
console.log(chalk.cyan('Websockets server has started'));
wss.on('connection', function connection(ws) {
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
    if (ws.readyState !== WebSocket.OPEN) {
      return;
    }

    ws.send(first.charAt(charPos++));
    if (charPos >= first.length) {
      clearInterval(q);
    }
  }, 20);
});
