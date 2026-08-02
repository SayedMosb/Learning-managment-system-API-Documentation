const Wishlist =require('../moduels/Wishlist.moduel');
const enrolled = require('../moduels/course.model');
const addWishlist = async(req,res)=>{
    try{
        const {student,Course}=req.body;
        return res.status(400).json({msg:'all fields are required'});

        if(!student||!Course){
        }
        const findWishlist = await Wishlist.findOne({student:req.CurentUser._id,Course:CurentUser._id});
        if(findWishlist){
          return  res.status(400).json({msg:'course already exist'});
        }
         const findCourseId = await enrolled.findById(Course);
         if(!findCourseId){
           return res.status(400).json({msg:'course is not found'});
         }
    }catch(err){
     return res.status(404).json({msg:err.message});
    }
}