var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', 
  						 tweets: tweets,
  						 showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', 
  			  { title: 'Twitter.js - Posts by '+name,
  			  	tweets: list,
  			  	name: name,
  			  	showForm: true } );
});

router.get('/users/:name/tweets/:id', function(req,res) {
	var name = req.params.name;
	var id = parseInt(req.params.id);
	var tweets = tweetBank.find( {name: name, id: id} );
	if (tweets.length != 1) res.respond(404, "Tweet not found.");
	res.render('detail', {title: 'Twitter.js - Tweet ' + id, tweet: tweets[0]});
});

router.post('/submit', function (req, res) {
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	router.io.sockets.emit('new_tweet', {name:name, text:text, id: tweetBank.new_id()});
	res.redirect('/');
});

module.exports = function (io) {
	router.io = io;
	return router;
};