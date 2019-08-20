const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jsSchema = new Schema({
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


const JS = module.exports = mongoose.model('JS', jsSchema)