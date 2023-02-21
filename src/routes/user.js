const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

router.use(express.json())

const UserController = require("../controllers/user.js")

router.post('/signup', UserController.signup)

router.post('/login', UserController.login)

module.exports = router