var Shirt = function(req, res, base, settings){
		//private
		
		
		// public
		return {
					
			//
			index: function(){
				
				var shirts = this.load.model('shirts');
				
				shirts.all(function(err, shirts){
					if(!err){
						res.json(shirts);
					}
				});
			},
			
			//
			add: function(){
				var shirt = req.body || {}
				var db = this.load.model('shirts');

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