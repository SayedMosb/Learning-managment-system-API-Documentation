const express =require('express');
const router = express.Router();


const {getMyCourse,GetStudentinCourse}=require('../controller/enrollments.cont');

router.get('/my-course',getMyCourse);
router.get('/:id',GetStudentinCourse);

module.exports =router;