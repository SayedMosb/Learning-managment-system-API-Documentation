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
       const authHeader = req.headers.authorization;

       if(!authHeader){
        res.status(401).json({meg:'token are required'});
       }

       const token =authHeader.split(' ')[1];
       try{
   const currentUser = JWT.verify(token,process.env.SECKRET_KEY );
   req.currentUser=currentUser;
   next();
       }catch(err){
        res.status(404).json({msg:'nvalid or expired token'})
       }
}

module.exports = verifyToken;