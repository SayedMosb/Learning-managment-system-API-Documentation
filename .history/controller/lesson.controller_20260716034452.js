const  leesonRoute = require('../moduels/lesson.model');


const addLesson = async(req,res)=>{
    try{
    const {title,Description,video,PDF,Duration, Course}=req.body;
    }catch(err){
        res.status(500).json({message:err.message});
    }
}