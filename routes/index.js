const express = require('express');
const router = express.Router();
const isLoggedin = require('../middlewares/isLoggedin')

router.get('/', (req, res) => {
    res.render('index', { error: null }); 
});

router.get('/shop', isLoggedin, function(req, res) {
    res.render('shop');
})

module.exports = router;
