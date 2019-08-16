const express = require('express'),
      mongoose = require('mongoose'),
      exphbs = require('express-handlebars'),
      bodyParser = require('body-parser'),

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))