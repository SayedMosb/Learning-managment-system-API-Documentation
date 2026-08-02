const mongoose =require('mongoose');
const category = new mongoose.Schema({
    id:{
     type:Number,
     required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    }
})