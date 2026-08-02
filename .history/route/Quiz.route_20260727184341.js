const express =require('express');

const router = express.Router();


const {
    addQuiz,
    getAllQuizes,
    getQuizById,
    getQuizWithQuestions,
    updatedQuiz,
    deletedQuiz
} = require('../controller/Quizes.controller');
router.post('/',addQuiz);
router.get('/',getAllQuizes);
router.get('/:id',getQuizById);
router.put('/:id',updatedQuiz);
router.delete('/:id',deletedQuiz);


module.exports =router;
