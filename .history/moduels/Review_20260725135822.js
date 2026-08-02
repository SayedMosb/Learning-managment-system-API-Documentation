const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
    student :{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    Course:{
        type:mongoose.SchemaType.ObjectId,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    Comment:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Review',ReviewSchema);