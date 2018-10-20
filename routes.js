const express = require('express')
const router = express.Router()

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
	const owner = req.body.owner;
	const address = req.body.work;
	const work = req.query.work;
	const helper = req.body.helper;
	const decade = req.query.decade;
	const image = req.body.image;
	const message = req.body.message;
	res.send(req.body);
})

module.exports = router
