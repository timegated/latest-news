const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.JS.find({tag: 'https://hackernoon.com/tagged/javascript'})
    .then(results => {
        res.render('index', {results})
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router