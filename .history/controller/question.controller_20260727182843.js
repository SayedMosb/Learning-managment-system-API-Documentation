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
        ,getQuestionsByQuiz
          });
          
          return res.status(201).json({msg:'question added successful',data:newData});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }

}
const getQuestionsByQuiz = async (req, res) => {
    try {
        const questions = await Question.find({
            Quiz: req.params.quizId
        });

        return res.status(200).json({
            data: questions
        });

    } catch (err) {
        return res.status(500).json({
            msg: err.message
        });
    }
};
const getALLquestion = async(req,res)=>{
    try{
       const getALLquestions = await Question.find({});
       if(getALLquestions.length==0){
        return res.status(200).json({msg:'no question is found'});
       } 
        return res.status(200).json({data:getALLquestions});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

const getQuestionById = async(req,res)=>{
    try{
       const Qusetiones = await  Question.findById(req.params.id);
       if(!Qusetiones){
        return res.status(200).json({msg:'question is not found'});
       }
       return res.status(200).json({msg:Qusetiones});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

const updatedQuestion = async(req,res)=>{
    try{
         const updated = await Question.findByIdAndUpdate(
           req.params.id,
           req.body,
           {new:true,runValidators:true}
         );
         if(!updated){
            return res.status(400).json({msg:'question is not found to updated'});
         }
         return res.status(200).json({msg:updated});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}
const deleteQuestion = async(req,res)=>{
    try{
          const deleted = await Question.findByIdAndDelete(req.params.id);
          if(!deleted){
            return res.status(400).json({msg:'question is not found to deleted'});
          }
          return res.status(200).json({data:'question add successful'});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports = {
    addQuestin,
    getQuestionById,
    getALLquestion,
    getQuestionsByQuiz,
    updatedQuestion,
    deleteQuestion
};
/*
addQuestion
getAllQuestions
getQuestionById
updateQuestion
deleteQuestion

*/