var Controller = function(){

	return{
	
		load: {
			model: function(modelName){
				return require('./../models/' + modelName).model();
			},
			
			view: function(viewName, data){
			
			}
		}
	
	}

}

exports.inherit = Controller;