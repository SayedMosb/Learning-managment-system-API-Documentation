const express = require('express');
const router = express.Router();
const verifyToken=require('../vertifyToken')
const {submitted,getMyResults,getallresult}=require('../controller/QuizResult.controller');

router.post('/submited',verifyToken,submitted);
router.post('/my-result',getMyResults);
router.get('/', getallresult);


module.exports =router;