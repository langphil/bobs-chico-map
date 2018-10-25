module.exports = {

	getDbConnectionString: function() {
		return "mongodb://" + process.env.USER_NAME +
		":" + process.env.PASS_WORD +
		"@ds137703.mlab.com:37703/heroku_g8gdwdr5";
	}
};


