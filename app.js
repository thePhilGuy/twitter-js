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

var routes = require('./routes/');
app.use('/', routes);
app.use(express.static(__dirname + '/public'));