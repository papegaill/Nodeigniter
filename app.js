/*-----------------------------------------------------------
| Module debepencies
|------------------------------------------------------------
|
*/
var express 				= require('express'),
	  connect 				= require('connect'),
	  less						= require('less'),
	  
	  customRoutes		= require('./application/config/routes.js').routes,
	  routeParser			= require('./system/routeParser').parse,
	  controller			= require('./system/callController'),
	  
	  config					= require('./application/config/config.js').config,
	  db							= require('./application/config/db.js').db;
	  
		public 					= __dirname + "/public",
		
		baseController	= require('./system/controller'),
		baseModel				= require('./system/model'),
		
		app 						= module.exports = express.createServer();

/*-----------------------------------------------------------
| Configuration
|------------------------------------------------------------
|
*/
app.configure(function(){
	
	// base classes
	app.set('controller', baseController);
	app.set('model', baseModel);
	
	// custom config files
	app.set('config', config);
	app.set('db', db);
	
	// directories
	app.set('modelDirectory', __dirname + '/application/models');
	app.set('controllerDirectory', __dirname + '/application/controllers');
	app.set('views', __dirname + '/application/views');
	app.set('partials'   , __dirname + '/application/views/partials');
	
	//
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  
  //
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  
  //
  app.use(express.static(public));
  app.use(express.compiler({src: public, enable: ['less'] }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});



/*-----------------------------------------------------------
| Routing
|------------------------------------------------------------
|
*/
// get requests
app.get('/*', routeParser(customRoutes), function(req, res, next){
	var route = req.route;
	controller.call(route, app, req, res, next);
});

//post requests
app.post('/*', routeParser(customRoutes), function(req, res, next){
	var route = req.route;
	controller.call(route, app, req, res, next);
});

// 404
app.use(function(req, res){ 
  res.render('errors/404', {
  	status: 404,
		title: 'Page Not Found'
	});
}); 


/*-----------------------------------------------------------
| Server port
|------------------------------------------------------------
|
*/
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
