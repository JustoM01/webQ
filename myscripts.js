var firstScreen = document.getElementById('first-screen');
var questionsDiv = document.getElementById('question-div');
var startButton = document.getElementById('start-button');
var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var timerEl = document.getElementById('Timer');
var time = 60;
var valId;
var remaining = '';



var questionsArray = [{
    question: "Commonly used data types do NOT include:",
    answer: "alerts",
    options: [
        "strings",
        "booleans",
        "alerts",
        "numbers",
    ],
},
{
    question: "The condition in an if/else statement is enclosed with ______.",
    answer: "parenthesis",
    options: [
        "quotes",
        "curly brackets",
        "parentheses",
        "square brackets",
    ]
},
{
    question: "Arrays in JavaScript can be used to store _______.",
    answer: "all of the above",
    options: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
    ]
}];


var startTime = function () {
    time--;
    timerEl.textContent=time;
    if(time <= 0) {
        // endQuiz();
    }
}
var currentqIndex = 0
function startQuiz (){
    remaining=time;
    valId = setInterval(startTime, 1000);
    timerEl.textContent = time
    currentqIndex++
  
     getQuestions();


}

function getQuestions(){
    firstScreen.setAttribute('class', 'hide');
    questionsDiv.removeAttribute('class','hide');
}

// startButton.addEventListener("click" , function() {
//     console.log('button was clicked')
//     startQuiz();
// })

document.getElementById("start-button").addEventListener("click", startQuiz());
