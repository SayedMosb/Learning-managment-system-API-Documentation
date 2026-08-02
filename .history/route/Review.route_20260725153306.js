const express = require('express');

const router = express.Router();

const {getReview,addReview,updateReview,deletedReview}=require('../controller/rewiew.controller');


router.post('/',addReview);
router.get('/:id',getReview);
router.put('/:id',updateReview);
router.delete('/:id',deletedReview);


module.exports =router;
