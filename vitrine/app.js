var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes')(app));

app.use(function(request, response, next) {
  response.send('Error 404');
});

app.use(function(err, request, response, next) {
  response.status(500).send('Error 500'+err);
});

module.exports = app;