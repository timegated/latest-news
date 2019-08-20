const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    url: String,
    image: String,
    saved: {
        type: Boolean,
        default: false
    }
})


const News = module.exports = mongoose.model('News', newsSchema)