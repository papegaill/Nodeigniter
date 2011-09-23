var Profile = function(req, res){

	//private
	
	//public
	return {
	
	//
		index: function(){
			var me = this.load.model('users');
			
			me.getInfo(function(err, info){
				
				console.log(info);
				
				res.render('mysevenly/profile', {
					layout: 'layout',
					title: 'My Profile',
					users: info
				});	
				
			});
			
		},
		
		//
		edit: function(){
			var data = req.body;
			
			// is a post	
			if(data){
			
			}
			// is a get
			else{
				res.send('edit');
			}
			
		},
		
		//
		new: function(){
			var db = this.load.model('users');
			// creating new error
			/*
db.new({
				info: {
					firstName: "Scott",
					lastName: "Corgan",
					email: "scott@sevenly.org",
					phone: "9512827753"
				},
				billing: {
					address: "2800 Madison Ave B8",
					city: "Fullerton",
					state: "CA",
					country: "US",
					postalCode: "92831",
					sameForShipping: true
				}
			}, function(err, response){
				if(!err){
					res.send('created a new user');
				}
				else{
					res.send('there was an error creating a new user');
				}
			});
*/
		},
		
		giving: function(){
			res.send('giving');
		}

	}

}

exports.controller = Profile;


// db schema
users = {
	info: {
		firstName: "Scott",
		lastName: "Corgan",
		email: "scott@sevenly.org",
		phone: "9512827753"
	},
	billing: {
		address: "2800 Madison Ave B8",
		city: "Fullerton",
		state: "CA",
		country: "US",
		postalCode: "92831",
		sameForShipping: true
	}
}