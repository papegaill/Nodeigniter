var Shirt = function(req, res, base, settings){
		//private
		var shirts = base.load.model('shirts');
		
		// public
		return {
		
			index: function(){
				
				shirts.all(function(err, shirts){
					res.json(shirts);
				});
				
			},
			
			add: function(){
				var shirt = req.body || null
				
				if(shirt){
					shirts.create(req.body);
				}

				res.redirect('/shirt');
			},
			
			get: function(title){
				
				shirts.getByTitle(title, function(err, shirt){
					res.json(shirt);
				});
				
			}
		}
			
};


exports.controller = Shirt;