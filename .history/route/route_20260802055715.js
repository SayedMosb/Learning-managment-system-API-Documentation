const express = require('express');
const router = express.Router();

const {login,register} = require('../controller/taskcon');
const { log } = require('node:console');
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sayed
 *               email:
 *                 type: string
 *                 example: sayed@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid data
 */
router.post('/register',register);

router.post('/login',login);



module.exports =router;