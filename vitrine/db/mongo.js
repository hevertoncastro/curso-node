var mongojs = require('mongojs');
var db = mongojs('localhost/vitrine');
db.on('error', function(err){
	console.log(err);
});

module.exports = db;