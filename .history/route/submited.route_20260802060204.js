const express = require('express');
const router = express.Router();
const verifyToken=require('../vertifyToken')
const {submitted,getMyResults,getallresult}=require('../controller/QuizResult.controller');
/**
 * @swagger
 * /api/result/submited:
 *   post:
 *     summary: Submit quiz result
 *     tags:
 *       - Quiz Results
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quiz:
 *                 type: string
 *                 example: "6a5810be9eb3b6400600226a"
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *     responses:
 *       201:
 *         description: Quiz submitted successfully
 */
router.post(
    "/submited",
    verifyToken,
    submitted
);
/**
 * @swagger
 * /api/result/my-result:
 *   get:
 *     summary: Get my quiz results
 *     tags:
 *       - Quiz Results
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Results fetched successfully
 */
router.post('/my-result',verifyToken,getMyResults);
/**
 * @swagger
 * /api/result:
 *   get:
 *     summary: Get all quiz results
 *     tags:
 *       - Quiz Results
 *     responses:
 *       200:
 *         description: All results fetched successfully
 */
router.get('/', getallresult);


module.exports =router;