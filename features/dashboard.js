const User =require('../moduels/moduel');
const Course =require('../moduels/course.model');
const Lesson =require('../moduels/lesson.model');
const Enrollment =require('../moduels/enrollments.moduels');
const Review =require('../moduels/Review');



const dashboard = async(req,res)=>{
    try{
      const users = await User.countDocuments();
      const courses =await Course.countDocuments();
      const lessons =await Lesson.countDocuments();
        const enrollments = await Enrollment.countDocuments();
        const reviews = await Review.countDocuments();


        return res.status(200).json({
            users,
            courses,
            lessons,
            enrollments,
            reviews
        });


    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports ={dashboard};