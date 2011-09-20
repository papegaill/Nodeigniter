var Shirts = function(db, base, settings){
		// private
		var ShirtSchema = new db.Schema({
			title       : {type : String, default : '', required : true},
		  created_at  : {type : Date, default : Date.now},
		  updated_at  : {type : Date, default : Date.now}
		});
		
		var dbItem = db.model('Shirt', ShirtSchema);
		
		// public
		return {
		
			create: function(fields){
				
				shirt = new dbItem(fields);
				
				shirt.save(function(err){
					console.log('saved');
				});
				
				return fields;				
			},
			
			all: function(callback){
				return dbItem.find({}).desc('created_at').run(callback);
			},
			
			getByTitle: function(title, callback){
				return dbItem.find({title: title}).run(callback);
			}
			
		}
}

exports.model = Shirts;