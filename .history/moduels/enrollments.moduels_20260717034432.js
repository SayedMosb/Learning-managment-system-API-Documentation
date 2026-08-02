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
      
});