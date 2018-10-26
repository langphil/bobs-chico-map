const locationModel = require("../models/location.model");

module.exports = function(req, res) {
	locationModel
		.find({
			type: 'Feature'
		})
		.then(doc => {
			res.json(doc);
		})
		.catch(err => {
			console.error(err)
		}
	)
}