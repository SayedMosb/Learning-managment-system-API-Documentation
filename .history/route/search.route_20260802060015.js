const express =require('express');
const router = express.Router();


const {searching}=require('../features/searching')
/**
 * @swagger
 * /api/courses/search:
 *   get:
 *     summary: Search courses by title
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: query
 *         name: data
 *         required: true
 *         schema:
 *           type: string
 *           example: Node
 *         description: Course title keyword to search
 *     responses:
 *       200:
 *         description: Courses found successfully
 *       400:
 *         description: Please enter search value
 *       404:
 *         description: Course not found
 */

router.get('/',searching);



module.exports =router;