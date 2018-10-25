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
})

module.exports = router
