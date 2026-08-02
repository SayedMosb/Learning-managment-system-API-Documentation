const mongoose =require('mongoose');

const enrollmentsSchema = new mongoose.Schema({
      student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required:true
      },
      Course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Courses',
        required:true
      },
      enrollmentDate:{
        type:Date,
        default:Date.now()
        
      },
      Status:{
        type:String,
        enum:["active","cancelled","completed"],
        default:'active'
      }
});

module.exports = mongoose.model('enrollments',enrollmentsSchema);