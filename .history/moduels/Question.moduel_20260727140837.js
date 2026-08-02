const mongoose = require('mongoose');

const questionShema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    option:{
        type:[String],
        required:true
    },
    correctAnswer :{
        type:String,
        required:true
    },
    Quiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quizes',
        required:true
    }
});


module.exports = mongoose.model('QuestionS',questionShema);