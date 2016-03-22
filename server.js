var express = require('express')
var app = express()
var server = require('http').createServer(app)
var http = require('http');

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/js', express.static(__dirname + '/src/js/'));
app.use('/css', express.static(__dirname + '/src/css/'));
app.use('/preset', express.static(__dirname + '/preset/'));
app.use(express.static(__dirname + '/src'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res){
	res.sendfile('src/index.html');
});
app.get('/canvas.html', function(req, res){
	res.sendfile('build/canvas.html');
});

app.get('/api/comments', function(req, res){
	res.send(JSON.stringify([
	  {id: 1, author: "Pete Hunt", text: "This is one comment"},
	  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
	])
	)
});

var port = 8080  ;
var ip = "127.0.0.1";
server.listen(port, ip, function(){
	console.log("Listening at Port " + port)
	console.log("Listening at IP " + ip)
});




