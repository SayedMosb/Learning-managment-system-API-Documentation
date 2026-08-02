const Quiz =require('../moduels/Quizes.moduel');

const addQuiz = async(req,res)=>{
    try{
        const {title,description,duration,Course}=req.body;
        if(!title||!description || !duration ||!Course){
         return   res.status(500).json({msg:'all fields are required'})
        }

        const newData = await Quiz.create({
            title,
            description,
            duration,
            Course

        });
      return  res.status(200).json({data:newData});
    }catch(err){
        return res.status(400).json({msg:err.message})
    }
}