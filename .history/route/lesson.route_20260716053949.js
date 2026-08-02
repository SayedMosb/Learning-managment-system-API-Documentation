const express =require('express');
const router =express.Router();

const {addLesson,getAlllesson,Updatedlesson,deletedlesson}=require('../controller/lesson.controller');

router.post('/',addLesson);
router.get('/',getAlllesson);
router.put('/:id',Updatedlesson);
router.delete('/:id',deletedlesson);
