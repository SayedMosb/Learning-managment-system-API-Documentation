const Question = require('../moduels/Question.moduel');

const addQuestin = async(req,res)=>{
    try{
          const{question,options,correctAnswer,Quiz}=req.body;
          if(!question || !options ||!correctAnswer||!Quiz){
            return res.status(400).json({msg:'all fields are required'});
          }
             if (!Array.isArray(options) || options.length === 0) {
            return res.status(400).json({
                msg: 'Options must be a non-empty array'
            });
        }
          const newData = await Question.create({
        question,
        options,
        correctAnswer,
        Quiz
          });
          
          return res.status(201).json({msg:'question added successful',data:newData});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }

}

const getALLquestion = async(req,res)=>{
    try{
       const getALLquestions = await Question.find({});
       if(getALLquestions.length==0){
        return res.status(404).json({msg:'no question is found'});
       } 
        return res.status(200).json({data:getALLquestions});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}


/*
addQuestion
getAllQuestions
getQuestionById
updateQuestion
deleteQuestion

*/