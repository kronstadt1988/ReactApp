var express = require('express')
var app = express()
var server = require('http').createServer(app)
var http = require('http');

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/js', express.static(__dirname + '/build/js/'));
app.use(express.static(__dirname + '/build'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res){
	res.sendfile('build/index.html');
});

var port = 8080  ;
var ip = "127.0.0.1";
server.listen(port, ip, function(){
	console.log("Listening at Port " + port)
	console.log("Listening at IP " + ip)
});




