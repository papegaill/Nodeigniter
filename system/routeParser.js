/*-----------------------------------------------------------
| routeParser
|------------------------------------------------------------
|
| @param customRoutes (array) - array of custom routes set in
|															  ./routes.js
|
*/
function routeParser(customRoutes){

	// private parsing method
	var parse = function(uri, routeToOverride){
	
		var route 				= {},
			  params 				= uri.split('/'),
				paramsLength 	= params.length,
				
				// start setting up route
				route = {
					controller:	(params[0]) ? params[0].toLowerCase() : undefined,
					method:			(params[1]) ? params[1].toLowerCase() : undefined
				};
		
		// set default method in route
		route.method = (route.method === '') ? undefined : route.method;
		
		// set route args
		route.args = params.splice(2) // all the other arguments in the URI
		
		/**********
			return
		***********/
		return route;
	}
	
	// ** public ** //
	return function(req, res, next){			
			
			// set access to route
			var route	 	= parse(req.params[0]),
					params	= req.params[0].replace(/\/$/g, ''); // removes trailing slash
			
			// override if a custom route is available available
			if(customRoutes[params]){
				route = parse(customRoutes[params]); // override controller
			}
			
			// load the index page set in routes
			else if(req.params[0] === ''){
				route = parse(customRoutes['/']);
			}
			
			// set route in req global
			req.route = route;
			
			// move on
			next();
	}
}

exports.parse = routeParser;