const Review =require('../moduels/Review');
const Enrollment = require('../moduels/enrollments.moduels');
const addReview = async(req,res)=>{
    try{
const { Course, rating, Comment } = req.body;
const student = req.currentUser._id;

const enroll = await Enrollment.findOne({
    student,
    Course
});

if (!enroll) {
    res.json({ msg: "You must enroll first" });
}

const existReview = await Review.findOne({
    student,
    Course
});

if (existReview) {
    res.json({ msg: "You already reviewed this course" });
}

const newData = await Review.create({
    student,
    Course,
    rating,
    Comment
});
        res.status(201).json({data:newData});

    }catch(err){
        res.status(404).json({msg:'add Review is failed'});
    }
}

const getReview =async(req,res)=>{
    try{
     const Reviews = await Review.find({
    Course: req.params.id
})
.populate("student", "firstName lastName")
.populate("Course", "title");
       if(!Reviews){
             res.status(201).json({msg:'review of here course is not found'});
       }
        res.status(201).json({msg:Reviews});
    }catch(err){
         res.status(404).json({msg:'get Review is failed'});
    }
}

const updateReview =async(req,res)=>{
    try{
       const reviews = await Review.findByIdAndUpdate(
        req.params.id,
        req.body,
       {new:true}
       );
       if(!reviews){
         res.status(404).json({msg:'reviews is not found'});
       }
        res.status(404).json({data:reviews});
    }catch(err){
         res.status(404).json({msg:'updated Review is failed'});
    }
}

const deletedReview = async(req,res)=>{
    try{
     const deleted = await Review.findByIdAndDelete(req.params.id);
     if(!deleted){
         res.status(404).json({msg:'review is not found'});
     }
      res.status(404).json({msg:'review is deleted successfuly'});
    }catch(err){
         res.status(404).json({msg:'deleted Review is failed'});
    }

}

module.exports={
    addReview,
    getReview,
    updateReview,
    deletedReview
}