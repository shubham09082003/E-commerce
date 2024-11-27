const mongoose = require('mongoose');

const user = mongoose.Schema(
{    fullname : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phonenumber : {
        type : Number,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
});

const User = mongoose.model('user',user);

module.exports = {
    User
}