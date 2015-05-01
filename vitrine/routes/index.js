module.exports = function(app){
	var express = require('express');
	var router = express.Router();

	router.get('/', function (request, response, next) {
		response.send('Heverton Castro - Home');
	});

	app.use('/products', require('./products'));

	return router;
}