const mongoose =require('mongoose');
const { type } = require('node:os');

const lessons = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
        video:{
        type:String
    },PDF:{
        type:String,
        required:true
    },
     Duration:{
        type:Number,
        required:true
     },
        Course:{
            type:String,
            required:true
        }
});
