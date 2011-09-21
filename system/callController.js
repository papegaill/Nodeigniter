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
	
	//white list by ip addres	
	if(app.settings.config.access.whiteList === req.client.remoteAddress){
		try{
			// initialize controller
			var controller = require(directory + route.controller).controller(req, res, app.settings.controller.inherit(app), app.settings);
			
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
		
		catch(e){
			next();
		}
	}
	else{
		res.redirect('http://sevenly.org');
	}
}

exports.call = callController;