const express = require('express');
const router = express.Router();

const WineController = require("../controllers/wine.js")

router.get('/', WineController.getAllWines)
router.get('/:id', WineController.getWine)

router.post('/', WineController.createWine)

router.put('/:id', WineController.updateWine)

router.delete('/:id', WineController.deleteWine);

module.exports = router;