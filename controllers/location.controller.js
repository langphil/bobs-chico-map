const location = require("../models/location.model");

module.exports = function(req, res) {
	var newLocation = location(
		{
			properties: {
				address: req.body.address,
				propertyOwner: req.body.owner,
				typeOfWork: req.body.work,
				decade: req.body.decade,
				helper: req.body.helper,
				message: req.body.message
			},
			geometry: {
				coordinates:
				[req.body.lng, req.body.lat]
			}
		}
	)
	newLocation.save(function(err) {
		if (err) throw err;
		res.send("Success");
	});
};