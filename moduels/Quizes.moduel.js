const mongoose =require('mongoose');

const QuizeShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    Course:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Courses',
         required:true

    }
});


module.exports = mongoose.model('Quizes',QuizeShema);