const dotenv = require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const adminRoutes = express.Router();


adminRoutes.post('/', async (req,res) => {
    const body = req.body;

    try{
        if(body.username == process.env.admin_username){
            if(body.password == process.env.admin_password){
                const token = jwt.sign(body.username,process.env.secret)
                res.status(200).json({
                    token
                });
            }
            else{
                res.status(403).json({
                    msg : "Incorrect Password"
                });
            }
        }
        else{
            res.status(403).json({
                msg : "Username not matched"
            });
        }
    }
    catch(e){
        console.log(e);
        res.status(411).json({
            msg : "Server Error"
        });
    }
});


module.exports = {
    adminRoutes
}