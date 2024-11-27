const dotenv = require('dotenv').config();

const express = require('express');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');


const userRoute = express.Router();

userRoute.post('/signup', async(req,res) => {
    const body = req.body;

    try{
        const response = await User.create({
            fullname : body.fullname,
            username : body.username,
            password : body.password,
            phonenumber : body.phonenumber
        });
    
        const token = jwt.sign(response.id , process.env.secret);
    
        res.json({
            token
        });
    }
    catch(e){
        console.log(e);
        res.json({
            error : "Server error"
        });
    }
});

userRoute.post('/signin' , async (req,res) => {
    const body = req.body;

    try{
        const response = await User.findOne({username : body.username});
        if(response){
            if(response.password == body.password){
                const token = jwt.sign(response.id,process.env.secret);
                res.json({
                    token
                })
            }
            else{
                res.json({
                    msg : "Password Does not match"
                })
            }
        }
        else{
            res.json({
                msg : "User not found"
            });
            return
        }
    }
    catch(e){
        res.json({
            error : "Server Error"
        })
    }
})

module.exports = {
    userRoute
}