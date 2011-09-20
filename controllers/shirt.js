exports.init = function(req, res){
		
		// private
		var variable =  "this is private";
		
		// public
		return {
		
			index: function(){
				res.render('index', {
			    title: variable
			  });
			},
			
			get: function(id){
				var data = {
					title: id || 'no id'
				}
				
				//res.render('header', data);
				res.render('index', data);
			}
		}
			
}
		