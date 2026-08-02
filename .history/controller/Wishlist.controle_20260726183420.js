
const Wishlist =require('../moduels/Wishlist.moduel');
const CourseModel = require('../moduels/course.model');
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
         const findCourseId = await CourseModel.findById(Course);
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
     return res.status(500).json({msg:err.message});
    }
}


const getWishlist = async(req,res)=>{
    try{
      const wishlist = await Wishlist.find({student:req.currentUser._id}).populate("Course");
      if(wishlist.length===0){
      return  res.status(404).json({msg:'no courses is found'});

      }
     return res.status(200).json({msg:wishlist});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

const updatedWishlist = async(req,res)=>{
    try{
          const updated = await Wishlist.findByIdAndUpdate(
            req.params.id,
            req.body
        ,{new:true}
    );
          if(!updated){
        return   res.status(200).json({msg:'wishlist is not found to updated'});
          }
        return  res.status(200).json({msg:'updated wishlist successful'})
    }catch(err){
      return  res.status(500).json({mes:err.message});
    }
}