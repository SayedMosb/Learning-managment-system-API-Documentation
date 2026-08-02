 const mongoose =require('mongoose');
const {validation} =require('validation-error');

 const mongooseSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
       validate:[validation.isEmail]
    }

 })