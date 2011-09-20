var auth = function(req, res){
		
		// private
		var that = this;
		
		// public
		return {
		
			index: function(args){
				res.send('auth index');
			},
			
			login: function(args){
				res.send('you are trying to login from auth');
			},
			
			logout: function(args){
				res.send('logging out now');
			}
			
		}
			
}

exports.init = auth;
