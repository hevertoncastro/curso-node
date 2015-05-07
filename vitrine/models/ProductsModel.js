var db = require('../db/mongo');
var debug = require('debug')('vitrine:controller');

function ProductsModel(){

}

ProductsModel.prototype.find = function(query, callback){
	db.collection('products').find(query, callback);
};

ProductsModel.prototype.insert = function(data, callback){
	db.collection('products').insert(data, callback);
};

ProductsModel.prototype.findOne = function(id, callback){
	var _id = db.ObjectId(id);

	db.collection('products').findOne({_id: _id}, callback);

};

ProductsModel.prototype.update = function(data, callback){
	db.collection('products').update(data, callback);
};

ProductsModel.prototype.remove = function(id, callback){
	db.collection('products').remove(id, callback);
};

module.exports = new ProductsModel();