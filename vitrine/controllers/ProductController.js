var mongojs = require('mongojs');
var db = mongojs('localhost/vitrine');


db.collection('products').find({}, function(err, result){
	console.log(err, result);
});

function ProductsController(){

}

ProductsController.prototype.findAll = function(request, response, next){
	response.send('Exibe todos');
	db.collection('products').find({}, function(err, result){
		response.json(result);
	});
};

ProductsController.prototype.create = function(request, response, next){
	response.send('Cria itens');

	var body = request.body;
	
	db.collection('products').insert(body, function(err, result){
		response.json(result);
	});
};

ProductsController.prototype.findOne = function(request, response, next){
	var _id = mongojs.ObjectId(request.params.id);

	db.collection('products').findOne({_id: _id}, function(err, result){
		response.json(result);
	});

	response.send('Exibe único item');
};

ProductsController.prototype.update = function(request, response, next){
	response.send('Atualiza item');
	db.collection('products').update({_id: _id}, {name: 'Produto 1'}, function(err, result){
		response.json(result);
	});
};

ProductsController.prototype.delete = function(request, response, next){
	response.send('Exclui item');
	db.collection('products').remove({_id: _id}, function(err, result){
		response.json(result);
	});
};

module.exports = new ProductsController();