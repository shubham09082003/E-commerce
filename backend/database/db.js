const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connect(process.env.DATABASE_URL,
    console.log("database is connected")
)

module.exports = {
    db
}

