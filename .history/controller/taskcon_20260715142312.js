const User =require('../moduels/moduel');

const {validation} = require('validation');

const bcrypt =require('bcrypt');

const register = async (req,res)=>{

    const {firstName,lastName,email,password} =req.body;
    try{
    if(!firstName || !lastName || !email || !password){
        res.status(400).json({message:'all fields are required'});
    }
    const users = await User.findOne({email});

    if(!users){
        res.status(400).json({email:'email are required'});
    }

    const hashPassword = await bcrypt.hash(password,10);

    const newData = User.create({
        firstName,
        lastName,
        email,
        password:hashPassword
    });
    }catch(err){
        res.status(404).json({message:err});
    }
}

