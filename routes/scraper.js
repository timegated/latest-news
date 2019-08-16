const express = require('express')
const cheerio = require('cheerio')
const db = require('/models')
const router = express.Router()

router.get('/news', (req, res) => {
    const options = {
        uri: 'http://www.nytimes.com/section/technology',
        transform: function(body) {
            return cheerio.load(body)
        }
    }
    db.News
    .create(newStoryArr)
    .then(result => res.json({count: newStoryArr.length}))
    .catch(err => {})

})

module.exports = router
