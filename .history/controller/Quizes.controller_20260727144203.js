const Quiz =require('../moduels/Quizes.moduel');
const enrollments =require('../moduels/enrollments.moduels')
const addQuiz = async(req,res)=>{
    try{
        const enrolled = await enrollments.findById(req.params.id);
        if(!enrolled){
            res.status(500).json({msg:'student is not enrolled in here course'})
        }
        const {title,description,duration,Course}=req.body;
        if(!title||!description || !duration ||!Course){
            res.status(500).json({msg:'all fields are required'})
        }

        const newData = await Quiz.create({
            title,
            description,
            duration,
            Course

        });
        res.status(200).json({data:newData});
    }catch(err){
        return res.status(400).json({msg:err.message})
    }
}