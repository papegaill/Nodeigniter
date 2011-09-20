var poster = function(req, res){
		
		// private
		var variable =  "posters";
		
		// public
		return {
		
			index: function(args){
			
				res.render('index', {
			    title: 'test'
			  });
			  
			},
			
			custom_route: function(args){
				res.send('this is your custom route with args: ' + args);
			}
			
		}
			
}

exports.init = poster;
