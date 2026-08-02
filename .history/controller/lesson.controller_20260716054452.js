const  lessonRoute = require('../moduels/lesson.model');


const addLesson = async(req,res)=>{
    try{
    const {title,Description,video,PDF,Duration, Course}=req.body;
    if(!title || !Description||!video||!PDF||!Duration||Course){
        return res.status(500).json({message:'all data are required'});
    }

const video = req.files.Video
    ? req.files.Video[0].filename
    : null;

const file = req.files.File
    ? req.files.File[0].filename
    : null;

   const newData = await Courses.create({
    title,
    Description,
    Image: image,
    video: video,
    PDF: file,
    Duration,
    Course,
});

    return res.status(201).json({message:newData});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const getAlllesson = async(req,res)=>{
    try{
       const Courses = lessonRoute.find({});
       if(Courses.length==0){
     return   res.status(201).json({message:'courses is not found and is Empty'});
       }
      return res.status(500).json({data:Courses});
    }catch(err){
        return res.status(500).json({message:err.message});
    }
}


const Updatedlesson = async (req,res)=>{
    try{
       const updated =  lessonRoute.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
       );
          if(!updated){
            res.status(500).json({message:'courses is not found to updated'});
          }
       res.status(500).json({data:updated});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
const deletedlesson = async(req,res)=>{
    try{
     const deleted = lessonRoute.findByIdAndDelete(req.params.id);
     if(!deleted){
       return res.status(500).json({message:'course is not found to deleted'});
     }
    return res.status(201).json({message:'courses is deleted success'});
    }catch(err){
      return  res.status(500).json({message:err.message});
    }
}



module.exports = 
{addLesson,
getAlllesson,
Updatedlesson,
deletedlesson};
