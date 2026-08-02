const express =require('express');
const router = express.Router();


const {searching}=require('../features/searching')
router.get('/',searching);



module.exports =router;