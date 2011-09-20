
/**
 * Module dependencies.
 */

var express 			= require('express'),
	  connect 			= require('connect'),
	  customRoutes	= require('./routes.js').route,
	  routeParser		= require('./modules/routeParser').parse,
	  controller 		= require('./modules/callController'),
		public 				= __dirname + "/public",
		app 					= module.exports = express.createServer();


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




// global route - passes in customRoutes to be parsed
app.get('/*', routeParser(customRoutes), function(req, res, next){
	var route = req.route;
	controller.call(route, req, res, next);
});


// 404
app.use(function(req, res){ 
  res.render('errors/404', {
  	status: 404,
		title: 'Page Not Found'
	});
}); 



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
