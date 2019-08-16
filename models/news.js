const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
    headline: {
        type: String,
        unique: true
    },
    summary: String,
    storyURL: String,
    saved: {
        type: Boolean,
        default: false
    }
})


const News = module.exports = mongoose.model('News', newsSchema)