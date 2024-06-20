const { text } = require('express');
const mongooes = require('mongoose')


const productSchema = mongooes.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
});

module.exports = mongooes.model('product', productSchema);