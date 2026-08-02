const express =require('express');

const router = express.Router();


const {addQuestin,getALLquestion,getQuestionById,updatedQuestion,deleteQuestion}=require('../controller/question.controller');

router.post('/',addQuestin);
router.get('/',getALLquestion);
router.get('/:id',getQuestionById);
router.put('/:id',updatedQuestion);
router.delete('/:id',deleteQuestion);


module.exports =router;
