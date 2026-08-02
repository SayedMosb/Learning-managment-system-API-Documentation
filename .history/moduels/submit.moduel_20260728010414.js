const mongoose = require('mongoose');

const submitSchema = new mongoose.Schema({
    questionId:{
     type:mongoose.Schema.Types.ObjectId,
    required:true
},
answer:{
    type:String,
    required:true
}
})

module.exports = mongoose.model('Submit',submitSchema);