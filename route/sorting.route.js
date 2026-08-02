const express =require('express');
const router =express.Router();


const {sorting}=require('../features/sorting');
/**
 * @swagger
 * /api/courses/sorting:
 *   get:
 *     summary: Sort courses
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: query
 *         name: sort
 *         required: true
 *         schema:
 *           type: string
 *           example: price
 *         description: Field name used to sort courses. Use - before field name for descending order
 *     responses:
 *       200:
 *         description: Courses sorted successfully
 *       400:
 *         description: Sort value is required
 */

router.get('/',sorting);

module.exports=router;