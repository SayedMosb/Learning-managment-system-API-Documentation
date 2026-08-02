const JWT = require('jsonwebtoken');
module.exports = (payload)=>{
       return   JWT.sign(payload,process.env.SECKRET_KEY,{expiresIn:'1h'});
}