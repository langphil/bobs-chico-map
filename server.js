const path = require('path')
const express = require('express')
const layout = require('express-layout')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

const routes = require('./routes/routes')
const config = require("./config");

const port = process.env.PORT || 8080;
const app = express()

require('dotenv').config()

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
	bodyParser.json(),
	bodyParser.urlencoded({ extended: false })
]
app.use(middlewares)

app.use('/', routes)

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`App running at http://localhost:` + port)
})
