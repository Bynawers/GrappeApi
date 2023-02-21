const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.use(express.json())

const WineController = require("../controllers/wine.js")

router.get('/', auth, WineController.getAllWines)
router.get('/:id', auth, WineController.getWine)

router.post('/', auth, multer, WineController.createWine)

router.put('/:id', auth, multer, WineController.updateWine)

router.delete('/:id', auth, WineController.deleteWine)

module.exports = router