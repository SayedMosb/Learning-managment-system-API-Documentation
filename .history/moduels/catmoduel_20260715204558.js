const mongoose =require('mongoose');
const category = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model('Category',category);