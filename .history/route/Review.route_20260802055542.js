const express = require('express');

const router = express.Router();

const {getReview,addReview,updateReview,deletedReview}=require('../controller/rewiew.controller');
const verifyToken =require('../vertifyToken');
/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Add new review
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 type: string
 *                 example: "6a5810be9eb3b6400600226a"
 *               rating:
 *                 type: number
 *                 example: 5
 *               comment:
 *                 type: string
 *                 example: "Great course"
 *     responses:
 *       201:
 *         description: Review added successfully
 */
router.post('/',addReview);

router.get('/:id',verifyToken,getReview);
router.put('/:id',verifyToken,updateReview);
router.delete('/:id',verifyToken,deletedReview);


module.exports =router;
