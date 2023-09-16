const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = Schema({
    name: String,
    desc: String,
    author: String,
    image: String,
    price: Number,
})
module.exports = mongoose.model('Book', bookSchema)