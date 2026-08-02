const express = require('express');

const router = express.Router();

const {getReview,addReview,updateReview,deletedReview}=require('../controller/rewiew.controller');
const verifyToken =require('../vertifyToken');

router.post('/',addReview);
router.get('/:id',verifyToken,getReview);
router.put('/:id',verifyToken,updateReview);
router.delete('/:id',verifyToken,deletedReview);


module.exports =router;
