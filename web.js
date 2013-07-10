var express = require('express');

var app = express.createServer(express.logger());

<<<<<<< HEAD
app.get('/', function(request, response) {
  response.send('Hello World 2!');
=======
app.get('/', function(reques 2t, response) {
  response.send('Hello World!');
>>>>>>> 2fad37485ddfa846a087574dab4c2e735aae7c8f
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
