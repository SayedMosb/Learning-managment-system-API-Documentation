const Wishlist =require('../moduels/Wishlist.moduel');
const enrolled = require('../moduels/enrollments.moduels');
const addWishlist = async(req,res)=>{
    try{
        const {student,Course}=req.body;

        if(!student||!Course){
            res.status(400).json({msg:'all fields are required'});
        }
        const findWishlist = await Wishlist.findOne(student,Course);
        if(findWishlist){
            res.status(400).json({msg:'course already exist'});
        }
         const findCourseId = await enrolled.findById(Course);
         if(!findCourseId){
            res.status(400).json({msg:'course is not found'});
         }
    }catch(err){
        res.status(404).json({msg:err.message});
    }
}