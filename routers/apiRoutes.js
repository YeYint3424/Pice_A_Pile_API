const express = require('express')
const router = express.Router();

const pileController = require('../controllers/pileController')

router.get('/all-questions', pileController.allQuestions)
router.get('/:id', pileController.ansForSingle)
router.get('/:QuestionId/:AnswerId', pileController.Answer)
router.get('/question/:QuestionId', pileController.GetQuestionById)

module.exports = router