const express = require('express');
const router = express.Router();

router.use(express.json())

const ImageController = require("../controllers/image.js")

router.get('/:name', ImageController.load)

module.exports = router