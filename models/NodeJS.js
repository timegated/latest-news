const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nodejsSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    url: String,
    image: String,
    tag: String,
    saved: {
        type: Boolean,
        default: false
    }
})


const Nodejs = module.exports = mongoose.model('Nodejs', nodejsSchema)