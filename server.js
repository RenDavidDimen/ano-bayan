var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/dist'));

var names = [];

app.get('/', function(req, res) {
  res.sendFile('index.html');
  res.status(200);
});

app.post('/', function(req, res) {
  names.push(req.body.name);
  res.redirect('/');
});

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port', server.address().port)
  console.log('Press Ctrl+C to quit')
})

