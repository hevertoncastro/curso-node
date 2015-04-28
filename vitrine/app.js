var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Home');
});

app.get('/products', function (req, res) {
  res.send('Devolve todos');
});

app.get('/products/:id', function (req, res) {
  var id = req.params.id;
  var category = req.query.category;
  res.send('Devolve um item específico: '+id+' da categorie '+category);
});

app.post('/products', function (req, res) {
  res.send('Crio um item');
});

app.put('/products/:id', function (req, res) {
  res.send('Atualiza item');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
