const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owners-model')


router.get('/create', async(req,res) => {
    let owners = await ownerModel.find();
    if(owners.length > 0) {
        return res.status(502).send('you dont create new owner');
    } else {
        let {fullname, password, email} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        })
        res.status(201).send(createdOwner);
    }
})
router.get('/admin',(req,res) => {
    let success = req.flash('success')
    res.render("createproducts", {success})
})
module.exports = router;