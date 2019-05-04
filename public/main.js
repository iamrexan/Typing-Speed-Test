var express = require('express');
var app = express();
var fs = require("fs");


app.use(express.static(__dirname));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "testtoedit.txt", 'utf8', function (err, data) {
      // console.log( data );
	  res.header("Access-Control-Allow-Origin", "*");
	  res.setHeader('content-type', 'application/json');
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})