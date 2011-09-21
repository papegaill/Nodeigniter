exports.config = {
	
	url: {
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