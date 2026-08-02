const express =require('express');

const router = express.Router();


const {
    addQuiz,
    getAllQuizes,
    getQuizById,
    getQuizWithQuestions,
    updatedQuiz,
    deletedQuiz
} = require('../controller/Quizes.controller');
/**
 * @swagger
 * /api/quiz:
 *   post:
 *     summary: Create new quiz
 *     tags:
 *       - Quizzes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: JavaScript Quiz
 *               lesson:
 *                 type: string
 *                 example: 6a5810be9eb3b6400600226a
 *     responses:
 *       201:
 *         description: Quiz created successfully
 */
router.post('/', addQuiz);
/**
 * @swagger
 * /api/quiz:
 *   get:
 *     summary: Get all quizzes
 *     tags:
 *       - Quizzes
 *     responses:
 *       200:
 *         description: Quizzes fetched successfully
 */
router.get('/', getAllQuizes);

router.get('/:id/questions', getQuizWithQuestions);
router.get('/:id', getQuizById);

router.put('/:id', updatedQuiz);
router.delete('/:id', deletedQuiz);


module.exports =router;
