var timer = document.getElementById("time");
// html button elements
var startQuiz = document.getElementById("start-quiz");
var questionBox = document.getElementById("question-box");
var opt1 = document.getElementById("opt-1");
var opt2 = document.getElementById("opt-2");
var opt3 = document.getElementById("opt-3");
var opt4 = document.getElementById("opt-4");

var questions = [
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
    questionBox.textContent = questions[0].questions;
    opt1.innerHTML = questions[0].opt1;
    opt2.innerHTML = questions[0].opt2;
    opt3.innerHTML = questions[0].opt3;
    opt4.innerHTML = questions[0].opt4;
}


startQuiz.addEventListener("click", function() {
    // functions for start go here
    setInterval(function() {
        var time = 100
        if (time >= 0) {
            timer.textContent = "time left" + time
            time --;
            console.log(time);
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