var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));

app.listen('3000');
console.log('server listening');

app.get('/', function(request, response) {
	response.send("Welcome to twitter-js");
})