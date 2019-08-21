const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.JS.find({ tag: 'https://hackernoon.com/tagged/javascript' })
    .then(javascript => {
        res.render('index', {javascript})
    })
    .catch(err => {
        res.json(err)
    })
   
})

router.get('/', (req, res) => {
    db.Nodejs.find({ tag: 'https://hackernoon.com/tagged/nodejs' })
    .then(nodejs => {
        res.render('index', {nodejs})
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router