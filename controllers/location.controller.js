const location = require("../models/location.model");

module.exports = function(app) {

	exports.newLocation = function(req, res) {
		var newLocation = location(
			{
				geometry: {
					coordinates:
					[req.body.lat, req.body.lng]
				},
				properties: {
					address: req.body.address,
					propertyOwner: req.body.owner,
					typeOfWork: req.body.work,
					decade: req.body.decade,
					message: req.body.mesage
				}
			}
		)
		newLocation.save(function(err) {
			if (err) throw err;
			res.send("Success");
		});
	}
};