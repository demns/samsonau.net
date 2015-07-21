var http = require('http');
var port = process.env.PORT || 1337;

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end('Hello World\nAnd hello, Azure');
}).listen(port);

console.log('Server running at http://127.0.0.1:1337/');
