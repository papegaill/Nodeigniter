
/**
 * Module dependencies.
 */

var express 		= require('express'),
	  connect 		= require('connect'),
	  parseRoute	= require('./modules/parseRoute').parse,
	  controller 	= require('./modules/callController'),
		public 			= __dirname + "/public",
		app 				= module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('partials'   , __dirname + '/views/partials');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  
  app.use(express.static(public));
  app.use(express.compiler({src: public, enable: ['less'] }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});






app.get('/*', parseRoute, function(req, res, next){
	var route = req.route;
	controller.call(route, req, res, next);
});


/*
// Routes
app.get('/:controller/:method/:args', function(req, res, next){
	var method = req.params.method || null;
	var args = req.params.args || null;
	
	// try to load controller file
	try{
		var _ctr = require('./controllers/'+req.params.controller);
		var controller = _ctr.init(req, res);
		controller[method](args);
	}
	catch(e){
		//return serverLoadError(res);
		next();
	}
});

//
app.get('/:controller/:method', function(req, res, next){
	var method = req.params.method;
	
	// try to load controller file
	try{
		var _ctr = require('./controllers/'+req.params.controller)(req, res);
		var controller = _ctr.init(req, res);
		controller[method]();
	}
	catch(e){
		//return serverLoadError(res);
		console.log(e);
		next();
	}
});

// only put in controllers, calls index function
app.get('/:controller', function(req, res, next){

	// try to load controller file
	try{
		var _ctr = require('./controllers/'+req.params.controller);
		var controller = _ctr.init(req, res);
		controller.index();
	}
	catch(e){
		//return serverLoadError(res);
		next();
	}
});
*/


// used for 404 not found page
app.use(function(req, res){ 
  res.render('errors/404', {
  	status: 404,
		title: 'Page Not Found'
	});
}); 



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
