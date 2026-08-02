const mongoose =require('mongoose');

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },Image:{
      type:String,
      required:true,
      default:'../Image/image.png'
    },
    instructor:{
        type:String,
        required:true
    },
    category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
}
});


module.exports = mongoose.model("Course_category", courseSchema);

