const mongoose =require('mongoose');
const { type } = require('node:os');

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
})