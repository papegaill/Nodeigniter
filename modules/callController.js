function callController(route, req, res, next){
	var directory = './../controllers/'

	try{
		// initialize controller
		var controller = require(directory + route.controller).init(req, res);		
		
		if(route.method && route.method !== ''){
			controller[route.method](route.args);
		}
		else{
			controller.index(route.args);
		}
		
		// call method
		
	}
	catch(e){
		next();
	}
}

exports.call = callController;