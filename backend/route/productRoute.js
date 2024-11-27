const dotenv = require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken')
const { Product } = require('../models/product');

const proRoute = express.Router();

async function middelware(req,res,next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ msg: "Authorization token missing" });
    }
    try{
        const response = jwt.verify(token,process.env.secret);
        if(response){
            next();

        }
        else{
            console.log("Invalid Authorization")
            res.status(411).json({
                msg: "Invaild authorization"
            })
        }
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            msg : "Server Error"
        })
    }
}



proRoute.post('/insert', middelware , async (req,res)=>{
    const body = req.body;

    try{
        const response = await Product.create({
            name : body.name,
            detail : body.detail,
            price : body.price,
            image : body.image,
            category : body.category
        });
        res.json({
            msg : "Product upload seccessfully"
        });
    }
    catch(e){
        res.json({
            msg : 'Server Error'
        });
    }
});

proRoute.put('/update/:id',middelware, async (req,res) => {
    const body = req.body;
    const {id} = req.params;
    try{    
        const response = await Product.findOneAndUpdate({ _id : id},
            {
                name : body.name,
                detail : body.detail,
                price : body.price,
                image : body.image,
                category : body.category
            }
        )
        console.log("Updated Successfully")
        res.json({
            msg : "Product Updated Sccessfully"
        });
    }   
    catch(e){
        console.log(e);
        res.json({
            msg : "Server Error"
        })
    }
});

proRoute.get('/find/:id', async (req,res) => {
    const { id } = req.params.id;
    try{
        const response = await Product.findOne({_id : id});  
        res.json({
            response
        });
    }
    catch(e){
        console.log(e);
        res.json({
            msg : "Error while fetching"
        })
    }
});



proRoute.get('/bulk', async (req, res) => {
    try {
        const filter = req.query.filter;
        const query = filter ? { category: filter } : {};

        const response = await Product.find(query);

        res.status(200).json({
            msg: "Success",
            data: response,
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            msg: "Error while fetching",
            error: e.message,
        });
    }
});



module.exports = {
    proRoute
}
