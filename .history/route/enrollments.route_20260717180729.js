const express =require('express');
const router = express.Router();


const {getMyCourse,GetStudentinCourse,addCourse}=require('../controller/enrollments.cont');

router.get('/my-course',getMyCourse);
router.get('/:id',GetStudentinCourse);
router.post('/',addCourse);

module.exports =router;