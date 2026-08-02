const Quiz =require('../moduels/Quizes.moduel');

const addQuiz = async(req,res)=>{
    try{
        const {title,description,duration,Course}=req.body;
        if(!title||!description || !duration ||!Course){
         return   res.status(400).json({msg:'all fields are required'})
        }

        const newData = await Quiz.create({
            title,
            description,
            duration,
            Course

        });
      return  res.status(201).json({data:newData});
    }catch(err){
        return res.status(400).json({msg:err.message})
    }
}

const getAllQuizes = async(req,res)=>{
    try{
        const Quizes = await Quiz.find({});
        if(Quizes.length===0){
            return res.status(404).json({msg:'no found quizes'});
        }
        return res.status(200).json({data:Quizes});
    }catch(err){
        return res.status(400).json({msg:err.message})
    }
}

const getQuizById = async(req,res)=>{
    try{
        const quize = await Quiz.findById(req.params.id);
        if(!quize){
         return   res.status(404).json({msg:'quiz is not found'});
        }
       return res.status(200).json({data:quize});
    }catch(err){
      return  res.status(500).json({data:err.message});
    }
}

const updatedQuiz =async(req,res)=>{
    try{
        const upQuiz = await Quiz.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true}
        );
        if(!upQuiz){
            return res.status(404).json({msg:'quiz is not found to updated'})
        }
        return  res.status(200).json({msg:'quiz are updated successful',data:upQuiz})
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

const deletedQuiz = async(req,res)=>{
    try{
        const deleted = await Quiz.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({msg:'quiz is not found to deleted'})
        }
        return res.status(201).json({msg:'quiz is deleted successful'});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports={
    addQuiz,
    getAllQuizes,
    getQuizById,
    updatedQuiz,
    deletedQuiz
};