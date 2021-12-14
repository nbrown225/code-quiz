// get dom elements
    // time and score
var timer = document.getElementById("time");
var time = 10;
    // buttons for controls
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
    // questions and answers
const questionBoxEl = document.getElementById("question-box")
const questionEl = document.getElementById("question");
const answerBoxEl = document.getElementById("answer-box");

var randomQuestions;
var questionIndex;

// an array for the questions
const questions = [
    {
        question: "WHAT IS 4 + 5",
        answers: [
            {text: "44", correct: false},
            {text: "9", correct: true},
            {text: "651", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "WHAT IS 4.6 x 5",
        answers: [
            {text: "15", correct: false},
            {text: "23", correct: true},
            {text: "6", correct: false},
            {text: "89", correct: false},
        ]
    }, {
        question: "WHAT IS 22 / 7",
        answers: [
            {text: "3", correct: false},
            {text: "PI", correct: true},
            {text: "3.14", correct: true},
            {text: "4", correct: false},
        ]
    }, {
        question: "WHAT IS 42.4 - 28.541",
        answers: [
            {text: "18.5", correct: false},
            {text: "13.859", correct: true},
            {text: "96.1", correct: false},
            {text: "5.44", correct: false},
        ]
    }, {
        question: "WHAT IS 9 x 9",
        answers: [
            {text: "654", correct: false},
            {text: "81", correct: true},
            {text: "5", correct: false},
            {text: "654", correct: false},
        ]
    },
];




// an array for options




// show questions function
function showHiddenQuestion() {
  
}



/*/ event listeners for start and next
startBtn.addEventListener("click", startQuiz);

// start quiz function
function startQuiz() {
    console.log("this is after click");
    showHiddenQuestion()
};
startQuiz();
// timer function



/ score function



function timesUp() {
    if (time >=0) {
        window.alert("TIMES UP")
    }
}
*/

startBtn.addEventListener("click", function(event) {
    console.log("is this working");
    setInterval(function myTimer() {
        if (time >= 0) {
            timer.textContent = "REMAINING TIME: " + time
            time --;
            console.log(myTimer);
        } else {
            window.alert("TIME'S UP")
        }
    }, 1000);
})
function timeStart() {
    
}




/* var time = document.getElementById("time");
var timeRemaining = 100;


// html button elements
var startQuiz = document.getElementById("start-quiz");
var nextBtn =document.getElementById("next-btn")

var questionBox = document.getElementById("question-box");
var opt1 = document.getElementById("opt-1");
var opt2 = document.getElementById("opt-2");
var opt3 = document.getElementById("opt-3");
var opt4 = document.getElementById("opt-4");
let scorre = 0
let currentQuestion = 0

var questionsArray = [
    {
        question1: "What color is the sky",
        answer: "optc",
        opt1: "PURPLE",
        opt2: "BLUE",
        opt3: "GREEN",
        opt4: "YELLOW"},
        
    {   
        question2: "THIS IS A TEST",
        answer: "optc",
        opt1: "PURPLE",
        opt2: "BLUE",
        opt3: "GREEN",
        opt4: "YELLOW"},
]


// opt2.innerhtml tells where it's going 
// questions[] say what we're getting it from
// posts it to the particular button 
function showQuestion() {
    let question = questionsArray[currentQuestion];
    $('.input').val(question.title);
    /*questionBox.textContent = questions[0].questions;
    opt1.innerHTML = questions[0].opt1;
    opt2.innerHTML = questions[0].opt2;
    opt3.innerHTML = questions[0].opt3;
    opt4.innerHTML = questions[0].opt4;
}
function score() {
    
    
}

startQuiz.addEventListener("click", function() {
    // functions for start go here
    setInterval(function() {
        timeRemaining--; //decremented
        time.textContent = "TIME LEFT: " + timeRemaining;
        if(timeRemaining <= 0) {
            clearInterval(setInterval);
        }
    }, 1000);
})




   setInterval(function() {
        if (timeRemaining === 0) {
            timer.innerHTML = "time left" + timeRemaining;
            timeRemaining --;
            //showScore();
            console.log(timer);
        }
   
    }, 1000);
})
function timeStart() {
}  




/*
// check answer function

var endGame = function(){
    clearInterval();
    // functions for end go here
        //display score
        // out of time message
        //try again?
}

// timer

startBtn.addEventListener("click", function(event) {
    showQuestion()
    // functions for start go here
    setInterval(function() {
        if (time >= 0) {
            timer.textContent = time
            time --;
        } else {
          endGame()  
        }
   
    }, 1000);
})
function timeStart() {
    
}
nextBtn.addEventListener("click", function(event) {
    showQuestion() 
    // if wrong answer - 5 from time
    // count score
    // check time
    // show next question

})




// event listener for start
    // event handler that displays questions 
// event listenr for questions
// event listener for wrong question click
    // event handler that will take seconds off the timer

// event listerner for next

    //QUESTIONS
// a way to keep score
  
    
    
    /*

    <button>START QUIZ</button>
    <!-- click event -->
    <!-- event listener -->
    <!-- event handler to start a timer when button is clicked-->

    <!-- event listener for correct answer -->
        <!-- event handler that will move to another question if correct -->
ndler that subtracts time for incorrect -->

    WHEN all questions are answered or the timer reaches 0
    THEN the game is over
    <!-- event listener for last question answered?-->
        <!-- event handler to end the game on last answered question-->
    
    WHEN the game is over
    THEN I can save my initials and score
    <!-- option to save initials-->
    <!-- option to save score-->
    */