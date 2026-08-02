const  leesonRoute = require('../moduels/lesson.model');


const addLesson = async(req,res)=>{
    try{
    const {title,Description}=req.body;
    }catch(err){
        res.status(500).json({message:err.message});
    }
}