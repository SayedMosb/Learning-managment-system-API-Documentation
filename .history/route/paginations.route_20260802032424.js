const express =require('express');
const router =express.Router();


const {Pagination}=require('../features/Pagination');

router.get('/',Pagination);

module.exports =router;