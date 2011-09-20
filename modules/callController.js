function callController(route, req, res, next){
	var directory = './../controllers/'

	try{
		// initialize controller
		var controller = require(directory + route.controller).init(req, res);		
		
		// call method
		controller[route.method](route.args);
	}
	catch(e){
		next();
	}
}

exports.call = callController;