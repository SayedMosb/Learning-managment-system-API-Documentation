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
    
})