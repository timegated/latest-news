const express = require('express')
const router = express.Router()
const db = require('../models')

//Getting current articles

router.get('/', (req, res) => {
    db.JS.find({ tag: 'https://hackernoon.com/tagged/javascript' })
    .then(results => {
        console.log(results)
        res.render('index', { results })
    })
    .catch(err => {
        // res.json(err)
    })
   
})

//Getting saved articles

router.get('/saved', (req, res) => {
    db.JS.find({saved: true}).populate('notes')
    .then(results => {
        res.render('savedarticle', { results })
    })
})
//Finding articles to save

router.put('/articles/put/:id', (req, res) => {
    db.JS.updateOne({ _id: (req.params.id) }, {$set: { saved: true } }, (err, article) => {
        if(err) throw new Error
    }).then(results => {
        console.log(results)
    })
})

//Notes
router.post('/note', (req, res) => {
    const articleId = req.body._id
    const title = req.body.title
    const body = req.body.body
   
   db.Note.updateOne({_id: articleId}, {title: title, body: body}, {upsert: true})
   .then(result => {
        return db.JS.updateOne({_id: articleId}, {notes: articleId}, {new: true})
   })
   .then(data => {
       console.log(data)
   })
   .catch(err => console.log(err))
})


module.exports = router