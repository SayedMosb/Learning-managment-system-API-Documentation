const quizResult = require('../moduels/QuizResult.moduel');
const Question = require('../moduels/Question.moduel');


const submitted = async(req,res)=>{
    try{
         const { Quiz: quizId, answers } = req.body;
        if (!quizId || !answers || answers.length === 0) {
            return res.status(400).json({
                msg: "All fields are required"
            });
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