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
/**
 * @swagger
 * /api/enrollments/{id}:
 *   get:
 *     summary: Get students enrolled in a course
 *     tags:
 *       - Enrollments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Students fetched successfully
 */
router.get('/:id',GetStudentinCourse);

router.post('/',addCourse);

module.exports =router;