const express = require('express');

const router = express.Router();

const {
    addQuestin,
    getQuestionById,
    getALLquestion,
    getQuestionsByQuiz,
    updatedQuestion,
    deleteQuestion
} = require('../controller/question.controller');
/**
 * @swagger
 * /api/question:
 *   post:
 *     summary: Create new question
 *     tags:
 *       - Questions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quiz:
 *                 type: string
 *               question:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               correctAnswer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Question created successfully
 */
router.post('/', addQuestin);
/**
 * @swagger
 * /api/question:
 *   get:
 *     summary: Get all questions
 *     tags:
 *       - Questions
 *     responses:
 *       200:
 *         description: Questions fetched successfully
 */
router.get('/', getALLquestion);
/**
 * @swagger
 * /api/question/quiz/{quizId}:
 *   get:
 *     summary: Get questions by quiz
 *     tags:
 *       - Questions
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Questions fetched successfully
 */
router.get('/quiz/:quizId', getQuestionsByQuiz);
/**
 * @swagger
 * /api/question/{id}:
 *   get:
 *     summary: Get question by id
 *     tags:
 *       - Questions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Question found
 */
router.get('/:id', getQuestionById);

router.put('/:id', updatedQuestion);

router.delete('/:id', deleteQuestion);

module.exports = router;