const mongooes = require('mongoose')


const ownerSchema = mongooes.Schema({
    fullname: {
        type:String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    picture: String,
    gstin: String
});

module.exports = mongooes.model('owner', ownerSchema);