const mongoose = require('mongoose');

const submitSchema = new mongoose.Schema({
    student:{
     type:mongoose.Schema.Types.ObjectId,
    required:true
},
Quiz:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
},
answer:{
    type:[String],
    required:true
},
score:{
    type:Number,
    required:true
},
totalQuestion:{
    type:String,
    required:true
},
percentage:{
   type:String,
   required:true
},
status:{
    type:String,
    required:true,
enum:["failed","Success"]
},
submittedAt:{
    type:String,
    required:true
}
})

module.exports = mongoose.model('Submit',submitSchema);