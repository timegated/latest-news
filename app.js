const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

const config = require('./config/database')



mongoose.Promise = Promise
mongoose.connect(config.database)
.then(result => {
    console.log(`Connected to database '${result.connections[0].name}' on ${result.connections[0].host}:${result.connections[0].port}`)
})
.catch(err => {
    console.log(err)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))

const scraper = require('./routes/scraper')
const content = require('./routes/index')

app.use('/', content)
app.use('/scrape', scraper)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})