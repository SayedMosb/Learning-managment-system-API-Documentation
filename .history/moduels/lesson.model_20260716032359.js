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
    vedio:{
        type:String
    },PDF:{
        type:String,
        required:true
    },

});