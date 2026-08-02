const express =require('express');
const router =express.Router();


const {sorting}=require('../features/sorting');

router.get('/',sorting);

module.exports=router;