const express = require('express');
const router = express.Router();

const {submitted,getMyResults,getallresult}=require('../controller/QuizResult.controller');

router.post('/submited',submitted);
router.post('/my-result',getMyResults);
router.get('/:id',getallresult);


module.exports =router;