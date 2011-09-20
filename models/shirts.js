require('./db');

var Shirts = function(){
		
		// private
		var ShirtSchema = new Schema({
			title       : {type : String, default : '', required : true},
		  created_at  : {type : Date, default : Date.now},
		  updated_at  : {type : Date, default : Date.now}
		});
		
		var DB = mongoose.model('Shirt', ShirtSchema);
		
		// public
		return {
		
			create: function(fields){
				
				shirt = new DB(fields);
				
				shirt.save(function(err){
					console.log(err);
				});
				
			},
			
			all: function(){
				
			}
			
		}
}

exports.model = Shirts;