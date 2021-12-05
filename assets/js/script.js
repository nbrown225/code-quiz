var startBtn = document.querySelector("start-btn");
var startBtn = document.querySelector("next-btn")
var questionBox = document.querySelector("question-box");
var optionBox = document.querySelector("option-box");

startBtn.onclick = ()=>{
    questionBox.classList.add("activeInfo");
};

    //QUESTIONS
    let questions = [
        {
            numb: 1, 
            question: "WHAT COLOR IS THE SKY?",
            answer: "BLUE",
            options: [
                "YELLO",
                "PURPLE",
                "BLUE",
                "GREEN"
        ]
        },
        {
            numb: 2,
            question: "WHY IS 6 AFRAID OF 7?",
            answer: "BECAUSE 7 8 9",
            options: [
                "6 IS A SCAREDY CAT",
                "WHY NOT",
                "BECAUSE HE CAN",
                "BECAUSE 7 8 9"
            ]
        },
    ];
    
    
    /*
    GIVEN I am taking a code quiz
    WHEN I click the start button
    THEN a timer starts and I am presented with a question
    <button>START QUIZ</button>
    <!-- click event -->
    <!-- event listener -->
    <!-- event handler to start a timer when button is clicked-->

    WHEN I answer a question
    THEN I am presented with another question
    <!-- event listener for correct answer -->
        <!-- event handler that will move to another question if correct -->

    WHEN I answer a question incorrectly
    THEN time is subtracted from the clock
    <!-- SOME KIND OF BUTTON OPTION OR CLICKABLE LI?-->
    <!-- event listener -->
        <!-- event listener for incorrect -->
            <!-- event handler that subtracts time for incorrect -->

    WHEN all questions are answered or the timer reaches 0
    THEN the game is over
    <!-- event listener for last question answered?-->
        <!-- event handler to end the game on last answered question-->
    
    WHEN the game is over
    THEN I can save my initials and score
    <!-- option to save initials-->
    <!-- option to save score-->
    */