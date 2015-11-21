//Lets require/import the HTTP module
const http = require('http');

//Lets define a port we want to listen to
const port = process.env.PORT || 1337; 

//We need a function which handles requests and send response
function handleRequest(request, response) {
  response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
let server = http.createServer(handleRequest);

//Lets start our server
server.listen(port, () => {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", port);
});
