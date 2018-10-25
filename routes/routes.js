const express = require('express')
const router = express.Router()
const location = require("../models/location.model");

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/map', (req, res) => {
	res.render('map')
})

router.get('/submission', (req, res) => {
	res.render('submission')
})

router.post('/data', (req, res) => {
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
})

module.exports = router
