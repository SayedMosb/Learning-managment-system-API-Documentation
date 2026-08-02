const express =require('express');

const router = express.Router();


const {getAllQuizes,getQuizById,updatedQuiz,deletedQuiz}=require('../controller/Quizes.controller');

