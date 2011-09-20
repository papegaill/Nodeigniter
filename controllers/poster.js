var poster = function(req, res){
		
		// private
		var variable =  "posters";
		
		// public
		return {
		
			index: function(args){
			
				res.render('index', {
			    title: args
			  });
			  
			}
		}
			
}

exports.init = poster;
