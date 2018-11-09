module.exports = {

	getDbConnectionString: function() {
		return "mongodb://" + process.env.USER_NAME +
		":" + process.env.PASS_WORD + process.env.DATABASE
		;
	}
};


