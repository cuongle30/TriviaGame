//create variables and DOM
var questions = [
    {
        question: "How did Spiderman get his power?",
        choices: [" Caught in a Radioactive explosion.", " He was born with it.", " Bitten by a Radioactive Spider.", " He was part of a science experiment.",],
        correct: "C",
        correct1: " Bitten by a Radioactive Spider.",
    },
    {
        question: "What is Captain America's first name?",
        choices: [" Tony", " Steve", " Peter", " Bruce"],
        correct: "B",
        correct1: " Steve",
    },
    {
        question: "What is Wolverine's mutant ability? ",
        choices: [" Super Strength.", " Healing.", " Metal Claws.", " Super Speed."],
        correct: "B",
        correct1: " Healing.",
    },
    {
        question: "How does the Hulk increase his strength? ",
        choices: [" The longer he fights.", " The more he is hurt.", " The angrier he gets.", " The brighter the sun is."],
        correct: "C",
        correct1: " The angrier he gets.",
    },
    {
        question: "",
        choices: "",
        correct: "",
        images: ""
    },
];
var correct = 0;
var incorrect = 0;
var timeRemain = 10;
var timeInterval;
var currentQuestion = 0;
var lastQuestion = questions.length - 1;

var quizDisplay = document.querySelector(".row")
var timeRemaining = document.getElementById("time-remaining");
var questionsDisplay = document.getElementById("questions");
var answerDisplay = document.getElementById("answer");
var choicesDisplay = document.getElementById("choices");
var choicesDisplayA = document.getElementById("choicesA");
var choicesDisplayB = document.getElementById("choicesB");
var choicesDisplayC = document.getElementById("choicesC");
var choicesDisplayD = document.getElementById("choicesD");
var startButton = document.getElementById("start");
var correctDisplay = document.getElementById("correct");
var incorrectDisplay = document.getElementById("incorrect");
var scoreDisplay = document.getElementById("total-score")
var pictureDisplay = document.getElementById("picture");
var totalScoreDisplay = document.getElementById("total-score")
var resetButton = document.getElementById("restart")

choicesDisplay.onclick = function (event) {
    var target = event.target;
    var answerChoice = event.target.getAttribute("answer");
    checkAnswer(answerChoice);
    currentQuestion++;
}
//function for decrement time on interval
function decrement() {
    timeRemain--;
    timeRemaining.innerText = `Time Remaining: ${timeRemain}`;
    if (timeRemain === 0) {
        stop();
        incorrect++;
        incorrectDisplay.innerHTML = `Incorrect: ${incorrect}`;
        currentQuestion++;
        getQuestion();
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
    choicesDisplayA.innerHTML = "A) " + questions[currentQuestion].choices[0];
    choicesDisplayB.innerHTML = "B) " + questions[currentQuestion].choices[1];
    choicesDisplayC.innerHTML = "C) " + questions[currentQuestion].choices[2];
    choicesDisplayD.innerHTML = "D) " + questions[currentQuestion].choices[3];
    //startButton.style.display = "none";
    startButton.style.visibility = "hidden";
    //display end page when finish last question
    if (currentQuestion === 4) {
        removeQuiz();//remove quiz dislay
        remove(); // remove hidden object to display score board
        stop();//clearintervsl
        addReset();//add reset button
    } 
}
//Remove class to display scoreboard
function remove() {
    totalScoreDisplay.classList.remove("score")
};
//Add invisible class to totalScoreDisplay to hide
function add(){    
totalScoreDisplay.classList.add("score")
};
//Condition when user choose correct or incorrect answer
//Correct increase or Incorrect increase
//Display screen with image once user select choice. Then move to next question after 2 seconds.
function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        correct++;
        correctDisplay.innerHTML = `Correct: ${correct}`;//Display score
        answerDisplay.innerHTML = "Right! Correct Answer is: " + questions[currentQuestion].correct1;//Display correct answer
        // var picture= document.createElement("img");
        // picture.setAttribute("src", "../images/spiderman.gif", "questions[currentQuestion].images");
        // pictureDisplay.appendChild(picture);
        setTimeout(function () { getQuestion(); }, 2000);
        stop();
    } else {
        answerDisplay.innerHTML = "Wrong! Correct Answer is: " + questions[currentQuestion].correct1;
        setTimeout(function () { getQuestion(); }, 2000);
        stop();
        incorrect++;
        incorrectDisplay.innerHTML = `Incorrect: ${incorrect}`;
    }
}
//reset game
    resetButton.addEventListener("click", function(event){
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    getQuestion();
    correctDisplay.innerHTML = `Correct: ${correct}`;
    incorrectDisplay.innerHTML = `Incorrect: ${incorrect}`;
    addQuiz();
    add();
    removeReset();
});
//Make Restart button appear
function addReset() {
    resetButton.classList.remove("restart-button")
}
//Remove Restart button
function removeReset(){
    resetButton.classList.add("restart-button")
}
//Function to remove class and add quiz
function addQuiz() {
    quizDisplay.classList.remove("invisible")
};
//Add class to hide scoreboard
function removeQuiz() {
    quizDisplay.classList.add("invisible")
}


