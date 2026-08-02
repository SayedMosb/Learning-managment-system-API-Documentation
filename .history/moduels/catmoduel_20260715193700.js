const mongoose =require('mongoose');
const moduel = require('./moduel');
const category = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
});

moduel.exports = mongoose.model('Category',category);