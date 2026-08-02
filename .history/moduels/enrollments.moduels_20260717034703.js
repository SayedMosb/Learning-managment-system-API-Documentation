const mongoose =require('mongoose');

const enrollmentsSchema = new mongoose.Schema({
      student:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
      },
      Course:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
      },
      enrollmentDate:{
        type:Date.now(),
        required:true
      },
      Status:{
        type:String,
        enum:["active","cancelled","completed"]
      }
});

module.exports = mongoose.model('enrollments',enrollmentsSchema);