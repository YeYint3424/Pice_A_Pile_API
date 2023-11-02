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


module.exports = {
    allQuestions,
    ansForSingle
}