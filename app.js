var express = require('express');
var morgan = require('morgan');
var swig = require('swig');
var app = express();

app.use(morgan('dev'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
/* development config */
swig.setDefaults({ cache: false });
/* ------------------ */

app.listen('3000');
console.log('server listening');

app.get('/', function(request, response) {
	response.send("Welcome to twitter-js");
})

app.get('/people', function(request, response) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	response.render( 'index', {title: 'Hall of Fame', people: people} );
})