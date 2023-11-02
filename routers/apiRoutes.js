const express = require('express')
const router = express.Router();

const pileController = require('../controllers/pileController')

router.get('/all-questions', pileController.allQuestions)

module.exports = router