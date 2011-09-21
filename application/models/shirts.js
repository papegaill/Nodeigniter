var Shirts = function(db, base, settings){
	
	var collection = db.collection('shirts');
	
	// public
	return {
		
		//
		create: function(fields){
				collection.insert(fields);
		},
		
		//
		all: function(callback){
			//return query.find({}).desc('created_at').run(callback);
			return collection.find().toArray(callback)
		},
		
		//
		getByTitle: function(title, callback){
			var t = title.toString(); // must be a string
			return collection.find({title: t}).toArray(callback);
		},
		
		//
		getByPermalink: function(permalink, callback){
			var p = permalink.toString(); // must be a string
			return collection.find({permalink: p}).toArray(callback);
		}
			
	}
}

exports.model = Shirts;