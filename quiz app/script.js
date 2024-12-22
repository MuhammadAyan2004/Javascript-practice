const question = document.getElementById("question");
const answerBtn = document.getElementById("answer-button");
const nextbtn = document.querySelector(".btn-main");
const questions = [
    {question: "which is the largest animal in the world?",
     answers:[{text:"shark",correct:false},{text:"Blue whale",correct:true},{text:"Elephant",correct:false},{text:"Giraffe",correct:false},]},
    {question: "which is the smallest country in the world?",
    answers:[{text:"Vitican city", correct:true},{text:"Sri lanka", correct:false},{text:"Bhutan", correct:false},{text:"Nepal", correct:false},]},
    {question: "which is the largest desert in the world?",
    answers:[{text:"Kalhari", correct:false},{text:"Gobi", correct:false},{text:"Sahara", correct:false},{text:"Antartica", correct:true},]},
    {question: "which is the smallest continent in the world?",
    answers:[{text:"Africa", correct:false},{text:"Asia", correct:false},{text:"Australia", correct:true},{text:"America", correct:false},]},
];

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuiz();
}
function showQuiz(){
    resetState()
    let qs = questions[currentquestionindex];
    let qsNo = currentquestionindex + 1;
    question.innerHTML = qsNo +". "+ qs.question;
    
    qs.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn"); 
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer)
    });
};
function selectanswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct === "correct"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}

nextbtn.addEventListener("click",()=>{
    if(currentquestionindex < questions.length){
        handleNextQuestion();
    }else{
        startquiz();
    }
})
function handleNextQuestion(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showQuiz();
    }else{
        showScore();
    }
}
function showScore(){
    resetState()
    question.innerHTML = `you score ${score} out of ${questions.length}`
    question.style.color = "white";
    nextbtn.innerHTML = "Play Again!"
}
function resetState(){
    nextbtn.innerHTML = "Next";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

startquiz()
