//create variables and DOM
//Questions
// var questions = [
// {   question: "How did Spiderman get his power?",
//     choicesA: " Caught in a Radioactive explosion.",
//     choicesB: " He was born with it.",
//     choicesC: " Bitten by a Radioactive Spider.",
//     choicesD: " He was part of a science experiment.",
//     correct: " Bitten by a Radioactive Spider.",
    
// }, 
// {   question: "What is Captain America's first name?",
//     choicesA: " Tony",
//     choicesB: " Steve",
//     choicesC: " Peter",
//     choicesD: " Bruce",
//     correct: " Steve"
// },
// {   question: "What is Wolverine's mutant ability? ",
//     choicesA: " Super Strength.",
//     choicesB: " Healing.",
//     choicesC: " Metal Claws.",
//     choicesD: " Super Speed.",
//     correct: " Healing",

// }];

var questions = [
    {   question: "How did Spiderman get his power?",
        choices: [" Caught in a Radioactive explosion.", " He was born with it.", " Bitten by a Radioactive Spider.", " He was part of a science experiment.",],
        correct: "C",
        images: "../images/spiderman.gif"
    }, 
    {   question: "What is Captain America's first name?",
        choices: [" Tony", " Steve", " Peter", " Bruce"],
        correct: "B",
        images: "../images/spiderman.gif"
    },
    {   question: "What is Wolverine's mutant ability? ",
        choices: [" Super Strength.", " Healing.", " Metal Claws.", " Super Speed."],
        correct: "B",
        images: "../images/spiderman.gif" 
    
    },
     {   question: "How did Spiderman get his power?",
    choices: [" Caught in a Radioactive explosion.", " He was born with it.", " Bitten by a Radioactive Spider.", " He was part of a science experiment.",],
    correct: "C",
    images: "../images/spiderman.gif"
}, 
];


var correct = 0;
var incorrect = 0;
var timeRemain = 10;
var timeInterval;
var currentQuestion = 0;
var lastQuestion = questions.length -1;

var quizDisplay = document.getElementById("quiz")
var timeRemaining = document.getElementById("time-remaining");
var questionsDisplay = document.getElementById("questions");
var answerDisplay = document.getElementById("answer");
var choicesDisplay = document.getElementById("choices");
var choicesDisplayA = document.getElementById("choicesA");
var choicesDisplayB = document.getElementById("choicesB");
var choicesDisplayC = document.getElementById("choicesC");
var choicesDisplayD = document.getElementById("choicesD");
var startButton =  document.getElementById("start");
var correctDisplay = document.getElementById("correct");
var incorrectDisplay = document.getElementById("incorrect");
var scoreDisplay = document.getElementById("total-score")
var pictureDisplay = document.getElementById("picture");
var totalScoreDisplay = document.getElementById("total-score")
var resetDisplay = document.getElementById("restart")

choicesDisplay.onclick = function(event){
    var target = event.target;
    var answerChoice = event.target.getAttribute("answer");
    checkAnswer(answerChoice);
}


//function for decrement time on interval
function decrement() {
    timeRemain--;
    timeRemaining.innerText = `Time Remaining: ${timeRemain}`;
    if(timeRemain === 0) {
        stop();
    };
}; 

//Function to stop interval/Timer to stop countdown
function stop() {
    clearInterval(timeInterval)
};

//User click start to display timer, questions, and multiple choices
//make start button disappear
//start countdown
startButton.addEventListener("click", getQuestion);

function getQuestion() {
    answerDisplay.innerHTML = "";
//count down interval
    timeRemaining.textContent = "Time Remaining: ";
    timeInterval = setInterval(decrement, 1000);
    timeRemain = 10;
//display questions and choices
    questionsDisplay.innerHTML = questions[currentQuestion].question;
    choicesDisplayA.innerHTML = questions[currentQuestion].choices[0];
    choicesDisplayB.innerHTML = questions[currentQuestion].choices[1];
    choicesDisplayC.innerHTML =  questions[currentQuestion].choices[2];
    choicesDisplayD.innerHTML =  questions[currentQuestion].choices[3];
    quizDisplay.style.display = "initial";
    //startButton.style.display = "none";
    startButton.style.visibility = "hidden";
//display end page when finish last question
    if (currentQuestion === 3){
        quizDisplay.style.visibility = "hidden";
        console.log("done")
        remove(); // remove hidden object to display score board
        //startButton.style.visibility = "initial";
        addReset();//add restart button 
    }
}
//Remove class to display scoreboard
function remove() {
    totalScoreDisplay.classList.remove("score")
};
//Add class to hide scoreboard
function add() {
    totalScoreDisplay.classList.add("invisible")
}
//Condition when user choose correct or incorrect answer
//Correct increase or Incorrect increase
//Display screen with image once user select choice. Then move to next question after 2 seconds.
function checkAnswer(answer) {
    //
    if (answer == questions[currentQuestion].correct) {
        console.log("yes")
        correct++;
        correctDisplay.innerHTML = `Correct: ${correct}`;
        answerDisplay.innerHTML = questions[currentQuestion].correct;
        // var picture= document.createElement("img");
        // picture.setAttribute("src", "../images/spiderman.gif", "questions[currentQuestion].images");
        // pictureDisplay.appendChild(picture);
        setTimeout(function(){getQuestion(); }, 2000);
        stop();
        currentQuestion++; 
    } else {
        incorrect++;
        incorrectDisplay.innerHTML = `Incorrect: ${incorrect}`;
        answerDisplay.innerHTML = questions[currentQuestion].correct;
        setTimeout(function(){getQuestion(); }, 2000);
        stop();
        currentQuestion++; 
    }

}

//reset game
function reset(){
    
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    quizDisplay.style.display = "initial";
    getQuestion();
    

}
//MAke Restart button appear
function addReset() {
    resetDisplay.classList.remove("restart-button")}

