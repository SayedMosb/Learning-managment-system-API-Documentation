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

router.get('/', getALLquestion);

router.get('/quiz/:quizId', getQuestionsByQuiz);

router.get('/:id', getQuestionById);

router.put('/:id', updatedQuestion);

router.delete('/:id', deleteQuestion);

module.exports = router;