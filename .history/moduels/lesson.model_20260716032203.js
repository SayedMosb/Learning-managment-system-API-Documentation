const mongoose =require('mongoose');

const lessons = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Description
});