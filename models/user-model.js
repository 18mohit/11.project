const mongooes = require('mongoose')


const userSchema = mongooes.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [{
        type: mongooes.Schema.Types.ObjectId,
        ref: 'product',
    }],
    order: {
        type: Array,
        default: []
    },
    contect: Number,
    picture: String
});

module.exports = mongooes.model('user', userSchema);