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
	
	//white list by ip addres	
	if(app.settings.config.access.whiteList === req.client.remoteAddress){
	
		try{
			
			// use directory to call controller if it exists
			var controllerLoc = (route.directory) ? route.directory + '/' + route.controller : route.controller;
			
			// initialize controller
			var controller = require(app.settings.controllerDirectory + '/' + controllerLoc).controller(req, res);
			
			// inherit base controller members/methods
			var parentController = new app.settings.controller.inherit(app);
			for(prop in parentController) if(parentController.hasOwnProperty(prop)) {
					controller[prop] = parentController[prop];
			}
			
			// call controller method
			if(route.method && route.method !== ''){
				controller[route.method](route.args);
			}
			else{
				controller.index(route.args);
			}		
		}
		
		// page not found
		catch(e){
			next();
		}
		
	}
	else{
		res.redirect('http://sevenly.org');
	}
}

exports.call = callController;