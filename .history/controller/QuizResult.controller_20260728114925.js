const quizResult = require('../moduels/QuizResult.moduel');
const Question = require('../moduels/Question.moduel');


const submitted = async(req,res)=>{
    try{
        const {Quiz,answers}=req.body;
        if(!Quiz||!answers){
            return res.status(404).json({msg:"all fields are required"});
        }
        
        const findQuiz = await quizResult.findById({Quiz});

        if(!findQuiz){
            return res.status(404).json({msg:'quiz is not find'});
        }

        const findQuizbyId = await Question.findById({Quiz:findQuiz});
        
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}