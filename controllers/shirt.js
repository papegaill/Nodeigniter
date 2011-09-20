var Shirt = function(req, res, base, settings){
		//private
		
		
		// public
		return {
		
			index: function(){
				res.render('shirt/index',{
					content: req.method
				});
			},
			
			add: function(){

				var shirts = base.load.model('shirts');
				
				shirts.create({
					title: 'Protect Cambodia Teesss'
				});

				res.send('shirt/add');
			},
			
			get: function(id){
				var data = {
					title: id || 'no id'
				}
				
				//res.render('header', data);
				res.render('index', data);
			}
		}
			
};


exports.init = Shirt;