const  lessonRoute = require('../moduels/lesson.model');


const addLesson = async(req,res)=>{
    try{
    const {title,Description,video,PDF,Duration, Course}=req.body;
    if(!title || !Description||!video||!PDF||!Duration||Course){
        return res.status(500).json({message:'all data are required'});
    }
    const newData = lessonRoute.create({
        title,
        Description,
        video,
        PDF,
        Duration,
        Course
    });

    return res.status(201).json({message:newData});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const getAllCourse = async(req,res)=>{
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


const UpdatedCourse = async (req,res)=>{
    try{
       const updated =  lessonRoute.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
       );
          indexedDB
       res.status(500).json({data:updated});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}