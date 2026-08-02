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

    }catch(err){
      return  res.status(400).json({data:err.message});
    }
}