module.exports = {

	getDbConnectionString: function() {
		return "mongodb://" + process.env.USER_NAME +
		":" + process.env.PASS_WORD +
		"@ds113455.mlab.com:13455/nodeapp";
	}

};
