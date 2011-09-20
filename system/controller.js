var Controller = function(){

	return{
	
		load: {
			model: function(modelName){
				// load mongoose module
				var db = require('./../models/db').mongoose;
				
				// load model and send to calling controller
				return require('./../models/' + modelName).model(db);
			},
			
			view: function(viewName, data){
			
			}
		}
	
	}

}

exports.inherit = Controller;