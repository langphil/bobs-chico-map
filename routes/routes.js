const express = require('express')
const router = express.Router()
const locationController = require("../controllers/location.controller");
const geojsonController = require("../controllers/geojson.controller");
const upload = require('../services/image_upload');

const singleUpload = upload.single('image');

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/map', (req, res) => {
	res.render('map')
})

router.get('/geojson', (req, res) => {
	geojsonController(req, res)
})

router.get('/submission', (req, res) => {
	res.render('submission')
})

router.post('/submission', (req, res) => {
	singleUpload(req, res);
	locationController(req, res);
})

module.exports = router
