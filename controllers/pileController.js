const Data = require('../data.json');

const allQuestions = (req,res) => {
    console.log(Data.Questions);
    const questions = Data.Questions;
    if(questions!=null){
        res.json(questions);
    }    
    else{
        console.log("error");
    }
}

module.exports = {
    allQuestions
}