const express = require('express');

const router = express.Router();

const {getReview,addReview,updateReview,deletedReview}=require('../controller/rewiew.controller');


router.post('/reviews',addReview);
router.get('/reviews/:id',getReview);
router.put('/reviews/:id',updateReview);
router.delete('/reviews/:id',deletedReview);


module.exports =router;
