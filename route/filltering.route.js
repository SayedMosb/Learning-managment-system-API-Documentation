const express =require('express');
const router =express.Router();

const{filltering}=require('../features/Filltering');
/**
 * @swagger
 * /api/courses/filtering:
 *   get:
 *     summary: Filter courses by category
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: query
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         example: WEB DEVELOPMENT
 *         description: Category name to filter courses
 *     responses:
 *       200:
 *         description: Courses filtered successfully
 *       400:
 *         description: Category is required
 *       404:
 *         description: No courses found in this category
 */

router.get('/',filltering);
module.exports=router;