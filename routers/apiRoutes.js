const express = require('express')
const router = express.Router();

const pileController = require('../controllers/pileController')

router.get('/all-questions', pileController.allQuestions)
router.get('/question/:QuestionId', pileController.GetQuestionById)
router.get('/:QuestionId/:AnswerId', pileController.Answer)
router.get('/:id', pileController.ansForSingle)


module.exports = router