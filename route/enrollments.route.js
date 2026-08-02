const express =require('express');
const router = express.Router();
const vertfiyToken=require('../vertifyToken');
const allowedTo =require('../allowedTo')

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
router.get('/my-course',vertfiyToken, allowedTo("student"),getMyCourse);
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
router.get('/:id',vertfiyToken,allowedTo("admin","instructor"),GetStudentinCourse);
/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Enroll student in course
 *     tags:
 *       - Enrollments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: "6a57cf64a9f76a9037499d5a"
 *               course:
 *                 type: string
 *                 example: "6a5810be9eb3b6400600226a"
 *     responses:
 *       201:
 *         description: Student enrolled successfully
 */

router.post('/',vertfiyToken,allowedTo("student"),addCourse);

module.exports =router;