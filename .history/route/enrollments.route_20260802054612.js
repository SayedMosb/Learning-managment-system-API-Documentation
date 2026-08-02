const express =require('express');
const router = express.Router();


const {getMyCourse,GetStudentinCourse,addCourse}=require('../controller/enrollments.cont');

/**
 * @swagger
 * /api/enrollments/my-course:
 *   get:
 *     summary: Get courses enrolled by current student
 *     tags:
 *       - Enrollments
 *     responses:
 *       200:
 *         description: Student courses fetched successfully
 */
router.get('/my-course',getMyCourse);

router.get('/:id',GetStudentinCourse);
router.post('/',addCourse);

module.exports =router;