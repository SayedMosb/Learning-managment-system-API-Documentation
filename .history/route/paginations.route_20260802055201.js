const express =require('express');
const router =express.Router();


const {Pagination}=require('../features/Pagination');
/**
 * @swagger
 * /api/courses/pagination:
 *   get:
 *     summary: Get courses with pagination
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: query
 *         name: page
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         required: true
 *         schema:
 *           type: integer
 *           example: 5
 *         description: Number of courses per page
 *     responses:
 *       200:
 *         description: Courses fetched successfully
 *       400:
 *         description: Page and limit are required
 *       404:
 *         description: No courses found
 */
router.get('/',Pagination);

module.exports =router;