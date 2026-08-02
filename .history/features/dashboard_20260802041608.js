const User =require('../moduels/moduel');
const Course =require('../moduels/course.model');
const Lesson =require('../moduels/lesson.model');
const enrollments =require('../moduels/enrollments.moduels');
const review =require('../moduels/Review');



const dashboard = async(req,res)=>{
    try{
      const user = await User.countDocuments();
      const courses =await Course.countDocuments();
      const lesson =await Lesson.countDocuments();
      
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}