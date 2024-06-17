const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { error: null }); // Initialize error as null or any default value
});

module.exports = router;
