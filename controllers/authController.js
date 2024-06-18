const bcrypt = require('bcrypt');
const userModel = require('../models/user-model');
const generateToken = require('../utils/generatetoken');
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {
        const { email, password, fullname } = req.body;

        let user = await userModel.findOne({email: email})
        if(user) return res.status(401).send('you alrady have account please login')
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);

       bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash){
            if(err) return res.send(err.message);
            else {
                let user = await userModel.create({
                    email,
                    password: hash,
                    fullname
                });
                let token = generateToken(user);
                res.cookie('token', token);

                res.send('user created successfully!!')
            }
        })
       })
        
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error registering user");
    }
};

const loginUser = async (req, res) => {
    let {email, password } = req.body;

    let user = await userModel.findOne({email: email});
    if(!user) return res.send('email or password is incorrect');

    bcrypt.compare(password, user.password, function(err,result){
        if(result){
            let token = generateToken(user);
            res.cookie('token', token);
            res.send('u can log in')
            // res.redirect('shop');
        }
        else{
            return res.send('email or password is incorrect');
        }
    })
}

module.exports = { registerUser,loginUser };
