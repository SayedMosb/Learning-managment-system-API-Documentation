const QuizResult = require('../moduels/QuizResult.moduel');
const Question = require('../moduels/Question.moduel');
const Quiz = require('../moduels/Quizes.moduel');

const submitted = async (req, res) => {
    try {
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

        const existingResult = await QuizResult.findOne({
    student: req.currentUser._id,
    Quiz: quizId
});

if (existingResult) {
    return res.status(400).json({
        msg: "You have already submitted this quiz"
    });
}
let score = 0;
const resultAnswers = [];

for (const answer of answers) {

    const question = questions.find(
        q => q._id.equals(answer.questionId)
    );

    if (!question) {
        continue;
    }

    const isCorrect = question.correctAnswer === answer.selectedAnswer;

    if (isCorrect) {
        score++;
    }

    resultAnswers.push({
        questionId: answer.questionId,
        selectedAnswer: answer.selectedAnswer,
        isCorrect
    });
}
        const totalQuestions = questions.length;
        const percentage = (score / totalQuestions) * 100;
        const status = percentage >= 60 ? "success" : "failed";
const newData = await QuizResult.create({
    student: req.currentUser._id,
    Quiz: quizId,
    answers: resultAnswers,
    score,
    totalQuestions,
    percentage,
    status
});
return res.status(201).json({
    msg: "Quiz submitted successfully",
    data: newData
});

    } catch (err) {
        return res.status(500).json({
            msg: err.message
        });
    }
};

const getMyResults =async(req,res)=>{
    try{
        const users = await QuizResult.find({student:req.currentUser._id}).populate("Quiz");;
        if(users.length===0){
        return res.status(400).json({msg:'no Quiz is found'});
        }
        return res.status(200).json({msg:'quiz result: ',users})
    }catch(err){
    return res.status(500).json({msg: err.message});
    }
}

const getallresult = async(req,res)=>{
    try{
       const quizesResults = await QuizResult.find({});
       if(!quizesResults){
        return res.status(400).json({msg:'no quizes is found'});
       }
       return res.status(500).json({data:quizesResults});
    }catch(err){
       return res.status(500).json({msg: err.message});
    }
}
module.exports = {
    submitted,
    getMyResults,
    getallresult

};