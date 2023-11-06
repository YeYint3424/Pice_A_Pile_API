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
    const ansId = parseInt(req.params.AnswerId,10);
    const qId = parseInt(req.params.QuestionId,10);

    const ans = Data.Answers.find(ans=>ans['QuestionId']===qId && ans["AnswerId"]===ansId)

    if(ans!=null){
        res.json(ans)
    }else{
        console.log("Error in answer...");
    }
}

const GetQuestionById =  async(req,res) => {
    const QuestionId = parseInt(req.params.QuestionId,10)
    const question = await Data.Questions.find(q=>q.QuestionId===QuestionId)

    if(question!=null){
        res.json(question)
    }else{
        console.log("Error in Get QuestionById...");
    }
}

module.exports = {
    allQuestions,
    ansForSingle,
    Answer,
    GetQuestionById
}