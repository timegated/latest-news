const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.News.find({})
    .then(results => {
        res.render('index', {results})
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router