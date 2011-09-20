var Controller = function(app){

	return{
	
		load: {
			model: function(modelName){
				// load mongoose module
				var db = require('./../config/db').db;

				// load model and send to calling controller
				return require('./../models/' + modelName).model(db, app.settings.model.inherit(db, app), app.settings);
			},
			
			view: function(viewName, data){
			
			}
		}
	
	}

}

exports.inherit = Controller;