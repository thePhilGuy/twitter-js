var _ = require('underscore');

var data = [];
var count = 0;

module.exports = {
	add: function(name, text) {
		data.push({name: name, text: text, id: ++count});
	},

	list: function() {
		return _.clone(data);
	},

	find: function(properties) {
		return _.where(data, properties);
	}
};

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

module.exports.add( "Phuuy", "Find my tweeeeets 1");
module.exports.add( "Phuuy", "Find my tweeeeets 2");

console.log(data);