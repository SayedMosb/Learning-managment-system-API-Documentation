/*
const JWT = require('jsonwebtoken');
const httpStatusTest = require('./httpStatusTest');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            status: httpStatusTest.FAIL,
            message: 'Token is required'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
const currentUser = 
JWT.verify(token, process.env.JWT_SECRET_KEY);

req.currentUser = currentUser;
console.log(req.currentUser);
next();

    } catch (err) {
        return res.status(401).json({
            status: httpStatusTest.FAIL,
            message: 'Invalid or expired token'
        });
    }
};

module.exports = verifyToken;
*/

const JWT = require('jsonwebtoken');


const verifyToken = (req,res,next)=>{

}