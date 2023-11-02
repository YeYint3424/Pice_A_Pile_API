const Data = require('../data.json');

const allQuestions = (req,res) => {
    const questions = Data.Questions;
    if(questions!=null){
        res.json(questions);
    }    
    else{
        console.log("error");
    }
}

const ansForSingle = (req,res) => {
    const id = req.params.id
    const answers = Data.Answers.filter(ans=>ans.QuestionId==id)
    if(answers!=null){
        res.json(answers)
    }else{
        console.log("Error in answer For Single Question");
    }
}

const Answer = (req,res) => {
    const ansId = req.params.AnswerId;
    const qId = req.params.AnswerId;
    const ans = Data.Answers.filter(ans=>ans.AnswerId==ansId && ans.QuestionId==qId)
    if(ans!=null){
        res.json(ans)
    }else{
        console.log("Error in answer...");
    }
}

module.exports = {
    allQuestions,
    ansForSingle,
    Answer
}