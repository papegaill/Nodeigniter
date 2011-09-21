var Shirt = function(req, res, base, settings){
		//private
		var db = base.load.model('shirts');
		
		// public
		return {
			
			//
			index: function(){
				db.all(function(err, shirts){
					if(!err){
						res.json(shirts);
					}
				});
			},
			
			//
			add: function(){
				var shirt = req.body || {}

				shirt.permalink = 'give-water-tee';

				if(shirt){
					db.create(shirt);
				}

				res.redirect('/shirt');
			},
			
			//
			get: function(permalink){
				db.getByPermalink(permalink, function(err, shirt){
					res.json(shirt);
				});
			}
		}
			
};


exports.controller = Shirt;