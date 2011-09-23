var Users = function(db, base, settings){
	
	// public
	return {
	
		getInfo: function(cb){
			return db.collection('users').find().toArray(cb);
		},
		
		//
		new: function(fields, cb){
			db.collection('users').insert(fields, false, cb);
		},
		
		//
		update: function(){
			
		}
			
	}
}

exports.model = Users;