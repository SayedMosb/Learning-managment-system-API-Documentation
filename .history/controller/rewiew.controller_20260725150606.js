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
       if (Reviews.length === 0) {
    res.json({ msg: "review of this course is not found" });
}
        res.status(201).json({msg:Reviews});
    }catch(err){
         res.status(404).json({msg:'get Review is failed'});
    }
}

const updateReview =async(req,res)=>{
    try{
       const review = await Review.findById(req.params.id);

if (!review) {
    return res.json({ msg: "Review not found" });
}
const reviews = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
);

        res.status(404).json({data:reviews});
    }catch(err){
         res.status(404).json({msg:'updated Review is failed'});
    }
}

const deletedReview = async(req,res)=>{
    try{
 const review = await Review.findById(req.params.id);

if (!review) {
    res.json({ msg: "Review not found" });
}

if (review.student.toString() !== req.currentUser._id.toString()) {
    res.json({ msg: "You can't delete this review" });
}

await Review.findByIdAndDelete(req.params.id);
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