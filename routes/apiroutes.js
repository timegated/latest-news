const express = require('express')
const router = express.Router()
const db = require('../models')

//Getting current articles

router.get('/', (req, res) => {
    db.JS.find({ tag: 'https://hackernoon.com/tagged/javascript' })
    .then(results => {
        // console.log(`i've been hit`)
        res.render('index', { results })
    })
    .catch(err => {
        // res.json(err)
    })
   
})

//Getting saved articles

router.get('/saved', (req, res) => {
    db.JS.find({saved: true})
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
   const {title, body, articleId} = req.body;
   const note = {
       title,
       body
   }
   db.Note.create(note)
   .then(results => {
       db.JS.findOneAndUpdate({_id: articleId}, {$push:{notes: results._id}}, {new: true})
        .then( data => res.json(data))
        .catch(err => res.json(err))
        console.log(results)
   })
})

router.get('/note', (req, res) => {
    
})

module.exports = router