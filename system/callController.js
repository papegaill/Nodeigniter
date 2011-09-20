/*-----------------------------------------------------------
| callController
|------------------------------------------------------------
|
| @param route (array) - parsed route
| @param app (object) - application object
| @param req (object) - request object
| @param res (object) - response object
| @param next (function) - callback to move on
|
*/
function callController(route, app, req, res, next){
	var directory = './../controllers/'

	try{
		// initialize controller
		var controller = require(directory + route.controller).controller(req, res, app.settings.controller.inherit(app), app.settings);		
		
		if(route.method && route.method !== ''){
			controller[route.method](route.args);
		}
		else{
			controller.index(route.args);
		}		
	}
	
	catch(e){
		next();
	}
}

exports.call = callController;