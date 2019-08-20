const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
// const rp = require('request-promise')
const router = express.Router()
const db = require('../models')
const fs = require('fs')

//Setting up scraper
router.get('/info', (req, res) => {
   axios.get("https://hackernoon.com/tagged/javascript").then(function (response) {
       const $ = cheerio.load(response.data)

       $('.story-card').each((index, element) => {
            let result = {}

            result.title = $(element).find('.title').text().trim()
            result.url = $(element).find('.title').children('a').attr('href')
            result.image = $(element).find('div').children('a').children('.img').attr('style')

            // console.log(result)
            db.News.create(result).then((dbNews) => {
                console.log(dbNews)
            }).catch((err) => {
                console.log(err)
            })
            
        })
    
    })
})
module.exports = router;
