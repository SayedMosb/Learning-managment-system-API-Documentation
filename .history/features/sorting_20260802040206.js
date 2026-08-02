const Course =require('../moduels/course.model');

const sorting =async(req,res)=>{
    try{
      const {sort}=req.query;
      if(!sort){
        return res.status(400).json({msg:'sotred value is required'});

      }
           const Courses = await Course.find({}).sort(sort);
            return res.status(200).json({
            data:Courses
        });

    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}
module.exports ={sorting};