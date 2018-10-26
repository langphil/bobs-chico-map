const express = require('express')
const router = express.Router()
const locationController = require("../controllers/location.controller");
const locationModel = require("../models/location.model");

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/map', (req, res) => {
	res.render('map')
})

router.get('/geojson', (req, res) => {
	locationModel
		.find({
			type: 'Feature'
		})
		.then(doc => {
			console.log(doc)
			res.json(doc);
		})
		.catch(err => {
			console.error(err)
		})
})

router.get('/submission', (req, res) => {
	res.render('submission')
})

router.post('/submission', (req, res) => {
	locationController(req, res);
})

module.exports = router
