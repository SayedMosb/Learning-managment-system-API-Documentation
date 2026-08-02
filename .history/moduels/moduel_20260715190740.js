 const mongoose =require('mongoose');
const { type } = require('node:os');
const validator = require('validator');

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
       validate:[validator.isEmail,'email are required']
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
      ,token:{
        type:String
      }
      ,role:{
        type:Object,
        enum:["admin","instractor","student"]
      }
 })


 module.exports = mongoose.model('LMS',mongooseSchema);