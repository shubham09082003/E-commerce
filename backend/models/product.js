const mongoose = require('mongoose');

const product = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    detail : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category: {
        type : String,
        required : true
    }
});

const Product = mongoose.model('product', product);

module.exports = {
    Product
};