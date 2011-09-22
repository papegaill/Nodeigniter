var Shirt = function(req, res){
		//private
		var layout = 'layout';
		
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
			new: function(){
				var data = req.body;
				
				if(data){
					var shirts = this.load.model('shirts');
					shirts.create(data);
					res.json(data);
				}
				else{
					res.render('shirt/new',{
						layout: layout,
						title: 'Add new shirt'
					});
				}
				
			},
			
			//
			get: function(permalink){
				var shirt = this.load.model('shirts');
				
				shirt.getByPermalink(permalink, function(err, shirt){
					res.json(shirt);
				});
			}
		}
			
};


exports.controller = Shirt;