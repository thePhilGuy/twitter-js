var express = require('express');
var morgan = require('morgan');
var swig = require('swig');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
/* development config */
swig.setDefaults({ cache: false });
/* ------------------ */

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen('3000');
console.log('server listening');

var routes = require('./routes/');
app.use('/', routes);
app.use(express.static(__dirname + '/public'));