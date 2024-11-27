
const jwt = require('jsonwebtoken');

const middelware = async (req , res , next) => {
    const token = req.headers.authorization;
    try{
        const response = jwt.verify( token , process.env.secret);
        next();
    }
    catch(e){
        res.status(400).json({
            msg : "Server Error"
        })
    }
}

module.exports = middelware;    