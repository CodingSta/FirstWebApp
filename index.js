var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('I love mingyu!');
});

app.get('/start', function(req, res){
    res.send('start page!!');
});

server.listen(80, '127.0.0.1', function(){
    console.log('Server listen on port!'+ server.address().port);
});
