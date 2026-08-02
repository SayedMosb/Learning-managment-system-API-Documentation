const quizResult = require('../moduels/QuizResult.moduel');
const Question = require('../moduels/Question.moduel');
const Quiz =require('../moduels/Quizes.moduel');

const submitted = async(req,res)=>{
    try{
         const { Quiz: quizId, answers } = req.body;
        if (!quizId || !answers || answers.length === 0) {
            return res.status(400).json({
                msg: "All fields are required"
            });
        }
       
        const findQuiz = await Quiz.findById(quizId);

        if (!findQuiz) {
            return res.status(404).json({
                msg: "Quiz not found"
            });
        }
         const questions = await Question.find({
            Quiz: quizId
        });
      if (questions.length === 0) {
            return res.status(404).json({
                msg: "No questions found for this quiz"
            });
        }
let score=0;
        for(const answer  of answers){
            if(answer === questions.correctanswer){
               score++;
            }
        }
const totalQuestions = questions.length;

const percentage = (score / totalQuestions) * 100;

const status = percentage >= 60 ? "success" : "failed";

     const newdata = await quizResult.create({
        totalQuestions,
        percentage,
        status
     })   
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports = {
    submitted
};