const User =require('../moduels/moduel');

const validator = require('validator');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const register = async (req,res)=>{

    const {firstName,lastName,email,password} =req.body;
    try{
    if(!firstName || !lastName || !email || !password){
     return   res.status(400).json({message:'all fields are required'});
    }
    const users = await User.findOne({email});

    if(users){
      return  res.status(400).json({email:'email are exist'});
    }

    const hashPassword = await bcrypt.hash(password,10);

    const newData =await User.create({
        firstName,
        lastName,
        email,
        password:hashPassword
    });
    return res.status(201).json({
    message: "User created",
    newData
});
    }catch(err){
       return res.status(404).json({message:err});
    }
}

const login = async (req,res)=>{
    const {email,password}=req.body;
    
    try{
         if (!email || !password){
         return   res.status(201).json({message:'email and password are required'});
         }
         const matched =await User.findOne({email});
         if (!matched){
         return   res.status(404).json({message:'email are not exist'});
         }
         const comp = await bcrypt.compare(password,matched.password);
if (!comp) {
    return res.status(400).json({
        message: "Wrong password"
    });
}


        return res.status(201).json({message:'login successfuly'});

    }catch(err){
      return  res.status(404).json({message:'error to login '});
    }
}


module.exports ={register,login};
