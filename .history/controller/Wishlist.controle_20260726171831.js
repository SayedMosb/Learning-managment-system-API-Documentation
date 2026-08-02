const Wishlist =require('../moduels/Wishlist.moduel');
const Course = require('../moduels/course.model');
const addWishlist = async(req,res)=>{
    try{
        const {Course}=req.body;
        if(!Course){
          return  res.status(400).json({msg:'Course are required'});
        }
        const findWishlist = await Wishlist.findOne({student:req.currentUser._id,Course:Course});
        if(findWishlist){
          return  res.status(400).json({msg:'course already exist'});
        }
         const findCourseId = await Course.findById(Course);
         if(!findCourseId){
           return res.status(400).json({msg:'course is not found'});
         }
         const newData = await Wishlist.create({
            student:req.currentUser._id,
            Course
         });
        return res.status(201).json({
    message: 'wishlist added successfully',
    data: newData
});
    }catch(err){
     return res.status(404).json({msg:err.message});
    }
}