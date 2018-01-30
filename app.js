
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var backhand = require('./routes/backhand');
var app = express();
var insert = require('./routes/insert');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/backhand', backhand.backhand);
app.post('/search',insert.search);
app.get('/insert', function(req, res){
	  res.render('clientinsert', {});
	});
app.get('/travel', function(req, res){
  res.render('search_city', {});
});
app.get("/SanJose", function(req, res){
	  res.render('San_Jose', {});
	});
	app.get('/SanDiego', function(req, res){
	  res.render('sandiego', {});
	});
	app.get('/SanFranscisco', function(req, res){
	  res.render('sanfranscisco', {});
	});
	app.get('/LosAngeles', function(req, res){
	  res.render('losangeles', {});
	});
	app.get('/Yosemite', function(req, res){
	  res.render('yosemte', {});
	});
	app.post('/insertClientData',insert.insertClientData);
	app.post('/search',insert.search);
	app.get('/newSignUpCustomer', function(req, res){
	  res.redirect('/#newSignUpCustomer');
	});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
