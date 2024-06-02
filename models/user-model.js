const mongooes = require('mongoose')


const userSchema = mongooes.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin:Boolean,
    order: {
        type: Array,
        default: []
    },
    contect: Number,
    picture: String
});

module.exports = mongooes.model('user', userSchema);