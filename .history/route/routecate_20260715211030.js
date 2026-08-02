const express =require('express');
const router = express.Router();

const {getallCategory,getallCategoryById,updatedCategory,deletedCategory}=require('../controller/cattask');
router.get('/categories')