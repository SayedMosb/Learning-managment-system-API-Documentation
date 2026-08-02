const express =require('express');
const router =express.Router();

const{filltering}=require('../features/Filltering');

router.get('/',filltering);
module.exports=router;