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
    console.log('ans'+ansId);
    console.log('qus'+ qId)
    Data.Answers.map((ans)=>{
        console.log('ans',ans["QuestionId"]);
    })
    const ans = Data.Answers.find(ans=>ans['QuestionId']===qId && ans["AnswerId"]===ansId)

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