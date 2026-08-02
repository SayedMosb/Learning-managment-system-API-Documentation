const Wishlist =require('../moduels/Wishlist.moduel');
const enrolled = require('../moduels/course.model');
const addWishlist = async(req,res)=>{
    try{
        const {Course}=req.body;
        if(!Course){
            res.status(400).json({msg:'Course are required'});
        }
        const findWishlist = await Wishlist.findOne({student:req.currentUser._id,Course:Course});
        if(findWishlist){
          return  res.status(400).json({msg:'course already exist'});
        }
         const findCourseId = await enrolled.findById(Course);
         if(!findCourseId){
           return res.status(400).json({msg:'course is not found'});
         }
         const newData = await Wishlist.create({
            student,
            Course
         });
         res.status(201).json({message:'wishlist are added successfuly'})
    }catch(err){
     return res.status(404).json({msg:err.message});
    }
}