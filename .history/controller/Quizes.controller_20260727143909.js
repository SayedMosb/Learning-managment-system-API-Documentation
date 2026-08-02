const Quiz =require('../moduels/Quizes.moduel');
const enrollments =require('../moduels/enrollments.moduels')
const addQuiz = async(req,res)=>{
    try{
        const enrolled = await enrollments.findById(req.params.id);
        if(!enrolled){
            res.status(500).json({msg:'student is not enrolled in here course'})
        }
        const {title,description,duration,}=req.body;
    }catch(err){
        return res.status(400).json({msg:err.message})
    }
}