var Shirt = function(req, res, base, settings){
		//private
		var shirts = base.load.model('shirts');
		
		// public
		return {
		
			index: function(){

				shirts.all(function(err, shirts){
					if(!err){
						res.json(shirts);
					}
				});
				
			},
			
			add: function(){
				var shirt = req.body || {}

				shirt.permalink = 'give-water-tee';

				if(shirt){
					shirts.create(shirt);
				}

				res.redirect('/shirt');
			},
			
			get: function(permalink){
			
				shirts.getByPermalink(permalink, function(err, shirt){
					res.json(shirt);
				});
				
			}
		}
			
};


exports.controller = Shirt;