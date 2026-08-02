const appError = require('./appError');

module.exports = (...roles) => {
    return (req,res,next)=>{

        if(!roles.includes(req.currentUser.role)){
            return next(appError.create(
                'This role is not allowed',
                403
            ));
        }

        next();
    }
}