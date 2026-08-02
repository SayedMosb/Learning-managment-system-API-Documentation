const express =require('express');
const router =express.Router();

const{dashboard}=require('../features/dashboard');

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get dashboard statistics
 *     tags:
 *       - Dashboard
 *     responses:
 *       200:
 *         description: Dashboard data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: number
 *                   example: 3
 *                 courses:
 *                   type: number
 *                   example: 2
 *                 lessons:
 *                   type: number
 *                   example: 9
 *                 enrollments:
 *                   type: number
 *                   example: 3
 *                 reviews:
 *                   type: number
 *                   example: 1
 */
router.get('/',dashboard);

module.exports =router;