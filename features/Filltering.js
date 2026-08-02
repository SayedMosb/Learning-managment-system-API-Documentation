const categories =require('../moduels/catmoduel');
const Course = require('../moduels/course.model');
const filltering = async(req,res)=>{
    try{
      let {category} =req.query;
       if(!category){
        return res.status(400).json({msg:'data us required'});
       }
      category= category.toLowerCase()
const categoryData = await categories.findOne({
    name:{
        $regex: category,
        $options:"i"
    }
});
       if(!categoryData){
        return res.status(404).json({msg:'course is not find'});
       }
       const courses = await Course.find({
    category: categoryData._id
});
if(courses.length === 0){
    return res.status(404).json({
        msg:"no courses found in this category"
    });
}
       return res.status(200).json({data:courses});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports ={filltering}