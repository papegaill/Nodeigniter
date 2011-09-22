exports.config = {
	
	url: {
	
		base: '127.0.0.1',
		baseNotSecure: 'http://' + this.base,
		baseSecure: 'https://' + this.base,

		base: 'localhost:3000',
		baseNotSecure: 'http://' + this.base,
		baseSecure: 'https://' + this.base,
		cdn: {
			static: '',
			
		}
		
	},
	
	access: {
	
		whiteList: '127.0.0.1' // only allowed
		
	}
	
};