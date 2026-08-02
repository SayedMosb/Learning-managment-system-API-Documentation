const Courses = require('../moduels/course.model');


const addCourse = async(req,res)=>{
    try{
    const {title,description,price,instructor,category} = req.body;

    if(!title || !description || !price ||!instructor ||!instructor ||!category){
       return res.status(500).json({message:'all fields are required'});
    }
const newdata = await Courses.create({
    title,
    description,
    price,
    Image,
    instructor,
    category
})
await newdata.save();
 return res.status(201).json({data:newdata});

    }catch(err){
      return  res.status(404).json({message:'error to add Course'});
    }
}


const getAllCourse = async (req,res)=>{
    try{
       const Course = await Courses.find({});
       if(Course.length == 0){
      return  res.status(500).json({message:'no Courses is found'});
       }
     return  res.status(201).json({Data:Course});
    }catch(err){
         return  res.status(404).json({message:'courses is  error to found'});
    }
}


const getCourseById = async (req,res)=>{
    try{
   const course = await Courses.findById(req.params.id);
   if(!course){
  return  res.status(505).json('courses are not found');
   }
  return res.status(201).json({data:course});
    }catch(err){
     return  res.status(404).json({message:'courses is  error to found'});
    }
}

const getCourseAndUpdated = async(req,res)=>{
    try{
        const  updated =await Courses.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updated){
        return     res.status(500).json({message:'all filed are required to updated'});
        }
      return   res.status(201).json({data:updated});
    }catch(err){
 return res.status(404).json({message:'error to updated Courses'});
    }
}  
const deledtedCourse = async (req,res)=>{
    try{
         
        const deleted = await Courses.findByIdAndDelete(req.params.id);
        if(!deleted){
          return   res.status(500).json({message:'courses are not found to Deleted'});
        }
        return  res.status(201).json({data:'coures is deleted successfly'});
    }catch(err){
   return  res.status(404).json({message:'courses is  error to deleted'});
    }
}

module.exports ={
    addCourse,
    getAllCourse,
    getCourseById,
    getCourseAndUpdated,
    deledtedCourse
}