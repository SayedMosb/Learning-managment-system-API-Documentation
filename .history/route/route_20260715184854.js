const express = require('express');
const router = express.Router();

const {login,register} = require('../controller/taskcon');
const { log } = require('node:console');

router.post('/register',register);
router.post('/login',login);



module.exports =router;