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
			
			login: function(args){
				res.send('you are trying to login');
			}
			
		}
			
}

exports.init = poster;
