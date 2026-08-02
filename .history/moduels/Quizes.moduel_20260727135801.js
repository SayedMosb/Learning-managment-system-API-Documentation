const mongoose =require('mongoose');
const moduel = require('./moduel');

const QuizeShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    delay:{
        type:String,
        required:true
    },
    Course:{
        type:mongoose.Schema.Types.ObjectIdl,
        required:true
    }
});


module.exports = mongoose.model('Quizes',QuizeShema);