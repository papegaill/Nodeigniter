var Controller = function(app){
	
	return{
		config: app.settings.config,
		
		load: {
			
			model: function(modelName){
				// load db info
				var dbInfo = app.settings.db;
				
				// connect to database
				var mongo = require(dbInfo.driver);
				var db = mongo.db(dbInfo.hostname + '/' + dbInfo.database);

				// load model and send to calling controller
				return require(app.settings.modelDirectory + '/' + modelName).model(db, app.settings.model.inherit(db, app), app.settings);
			},
			
			view: function(viewName, data){
				console.log('loading ' + viewName);
			},
			
			helper: function(helperName){
				console.log('loading ' + helperName);
			}
		}
	
	}

}

exports.inherit = Controller;