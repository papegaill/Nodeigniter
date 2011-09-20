var Controller = function(app){

	return{
	
		load: {
			model: function(modelName){
			
				// load db info
				var dbInfo = app.settings.db;
				
				// connect to database
				var mongo = require(dbInfo.driver);
				var db = mongo.db(dbInfo.hostname + '/' + dbInfo.database);

				// load model and send to calling controller
				return require('./../models/' + modelName).model(db, app.settings.model.inherit(db, app), app.settings);
			},
			
			view: function(viewName, data){
			
			}
		}
	
	}

}

exports.inherit = Controller;