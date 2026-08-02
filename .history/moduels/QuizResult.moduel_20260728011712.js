const mongoose = require('mongoose');

const submitSchema = new mongoose.Schema({
    student:{
     type:mongoose.Schema.Types.ObjectId,
     ref: "Users",
    required:true
},
Quiz:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required:true
},
answer:{
    type:[String],
    required:true

}],
score:{
    type:String,
    required:true
},
totalQuestion:{
    type:Number,
    required:true
},
percentage:{
   type:Number,
   required:true
},
status:{
    type:String,
    required:true,
enum:["failed","Success"]
},
submittedAt:{
    type:Date,
    default:Date.now(),
}
})

module.exports = mongoose.model('Submit',submitSchema);