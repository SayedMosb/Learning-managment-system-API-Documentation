const categories =require('../moduels/course.model');

const filltering = async(req,res)=>{
    try{
      let {data} =req.query;
       if(!data){
        return res.status(404).json({msg:'data us required'});
       }
      data= data.toLowerCase()
       const courses = await Course.find({
    category: categoryData._id
});
       if(courses.length===0){
        return res.status(404).json({msg:'course is not find'});
       }
       return res.status(200).json({data:courses});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports ={filltering}