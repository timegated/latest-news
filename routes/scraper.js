const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
// const rp = require('request-promise')
const router = express.Router()
const db = require('../models')
const fs = require('fs')
console.log(db)
//Setting up scraper
router.get('/javascript', (req, res) => {
   axios.get("https://hackernoon.com/tagged/javascript").then((response) => {
       const $ = cheerio.load(response.data)

       $('.story-card').each((index, element) => {
            let result = {}

            result.title = $(element).find('.title').text().trim()
            result.url = $(element).find('.title').children('a').attr('href')
            result.tag = $(element).find('.tag').attr('href')
            result.image = $(element).find('div').children('a').children('.img').attr('style')
            
            // console.log(result)
            db.JS.create(result).then((dbInfo) => {
                console.log(dbInfo)
            }).catch((err) => {
                console.log(err)
            })
            
        })
    
    })
})
router.get('/nodejs', (req, res) => {
    axios.get("https://hackernoon.com/tagged/nodejs").then((response) => {
        const $ = cheerio.load(response.data)
 
        $('.story-card').each((index, element) => {
             let result = {}
 
             result.title = $(element).find('.title').text().trim()
             result.url = $(element).find('.title').children('a').attr('href')
             result.tag = $(element).find('.tag').attr('href')
             result.image = $(element).find('div').children('a').children('.img').attr('style')
             
             // console.log(result)
             db.Nodejs.create(result).then((dbInfo) => {
                 console.log(dbInfo)
             }).catch((err) => {
                 console.log(err)
             })
             
         })
    })
})
module.exports = router;
