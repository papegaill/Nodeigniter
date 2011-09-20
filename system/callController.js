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
	if(app.settings.config.whiteList === req.client.remoteAddress){
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
	else{
		res.redirect('http://sevenly.org');
	}
}

exports.call = callController;