const Question = require('../moduels/Question.moduel');

const addQuestin = async(req,res)=>{
    try{
          const{question,options,correctAnswer,Quiz}=req.body;
          if(!question || !options ||!correctAnswer||!Quiz){
            return res.status(404).json({msg:'all fields are required'});
          }
          const newData = await Question.create({
        question,
        options,
        correctAnswer,
        Quiz
          });
          return res.status(200).json({msg:'question added successful',data:newData});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}
