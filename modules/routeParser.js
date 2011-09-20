// parses the URI to create a global
function routeParser(customRoutes){
	
	// private parsing method
	var parse = function(uri, routeToOverride){
	
		var route 				= {},
			  params 				= uri.split('/'),
				paramsLength 	= params.length;
		
		// start setting up route
		var route = {
			controller:	params[0],
			method:			params[1],
			format:			format
		};
		
		// set default method in route
		route.method = (route.method === '') ? undefined : route.method;
		
		var args = params.splice(2) // all the other arguments in the URI
		var format,
			  lastArg;
		
		// only attempt if there are even values for args in the params
		if(paramsLength > 2){
			// get potential format
			format = args[args.length-1].split('.')[1];
			lastArg = args[args.length-1].split('.')[0];
		}
		
		if(format){
			route.format = format; // set format
			args[args.length-1] = lastArg; // remove form extension from last pararm and reassign it in the array
		}
		
		// set route args
		route.args = args; 
		
		/**********
			return
		***********/
		return route;
	}
	
	return function(req, res, next){			

			// set access to route
			var route	 	= parse(req.params[0]),
					params	= req.params[0].replace(/\/$/g, ''); // removes trailing slash
			
			// override if a custom route is available available
			if(customRoutes[params]){
				// override controller
				console.log('overriding!!');
				route = parse(customRoutes[params]);
			}
			
			req.route = route;
			
			// move on
			next();
	}
}

exports.parse = routeParser;