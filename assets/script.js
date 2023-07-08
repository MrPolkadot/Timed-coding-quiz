console.log("CODE QUIZ");

let seconds;
let timer = document.querySelector("#timer");
let startingPoint = document.querySelector("#starting-point");
let startQuizButton = document.querySelector("#start-quiz-button");
let quizBlock = document.querySelector("#quiz-block");
let resultText = document.querySelector("#result-text");
let rightChoice = document.querySelectorAll("#right");
let wrongChoice = document.querySelectorAll("#wrong");

// let questionOne = document.querySelector("#question-one");
// let questionTwo = document.querySelector("#question-two");
// let questionThree = document.querySelector("#question-three");
// let questionFour = document.querySelector("#question-five");
// let questionFive = document.querySelector("#question-six");
// let questionSix = document.querySelector("#question-seven");
// let questionSeven = document.querySelector("#question-seven");
// let questionEight = document.querySelector("#question-eight");
// let questionNine = document.querySelector("#question-nine");
// let questionTen = document.querySelector("#question-ten");
let questions = document.querySelectorAll(`[id^="question"]`);

console.log(wrongChoice);

//Will start the quiz and the countdown
startQuizButton.addEventListener("click", function () {
    questions[0].style.visibility = "visible";
    startingPoint.style.visibility = "hidden";
    countdown();
});

//Converts these NodeLists into an array
let rightChoiceArr = Array.from(rightChoice);
let wrongChoiceArr = Array.from(wrongChoice);
let questionsArr = Array.from(questions);
console.log(questions);


//Displays message if either right or wrong
for (let i = 0; i < rightChoiceArr.length; i++) {
    rightChoiceArr[i].addEventListener("click", function() {
        displayCorrectMessage();
        sectionChange();
    });
}

for (let i = 0; i < wrongChoiceArr.length; i++) {
    wrongChoiceArr[i].addEventListener("click", displayWrongMessage);
    
};

//Counts down the timer once quiz is started.
function countdown() {
    seconds = 60; //Change it to 60 in the future.
    let timeInterval = setInterval(function () {
        //subtract 3 seconds each time wrong is chosen.
        //if (wrongAnswer) {
        //seconds = seconds - 3;
        //}
        if (seconds > 0) {
            timer.textContent = seconds;
            seconds--;
        } else {
            timer.textContent = "0";
            clearInterval(timeInterval);
            //Enter function here that will stop the game and send you to endpoint section.
        }
    }, 1000);
};


function displayCorrectMessage() {
    if (rightChoiceArr) {
        resultText.textContent = "Correct";
    }
};

function displayWrongMessage() {
    if (wrongChoiceArr) {
    resultText.textContent = "Wrong";
    }
};

//Work on this
function sectionChange() {
    i = 0;
    i = i + 1;
    i = i % questionsArr.length;
    return questionsArr[i]; 
    
    // for (let i = 0; i < questionsArr.length; i++) {
        // return questionsArr[i];
     }
    //     if (rightChoiceArr || wrongChoiceArr) {
    //         questionsArr[1].style.visibility = "visible";
    //         console.log(questionsArr[i]);
    //     }
    // }
    
};