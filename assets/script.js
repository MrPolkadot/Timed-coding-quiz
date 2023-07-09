console.log("CODE QUIZ");

let seconds;
let timer = document.querySelector("#timer");
let startingPoint = document.querySelector("#starting-point");
let startQuizButton = document.querySelector("#start-quiz-button");
let quizBlock = document.querySelector("#quiz-block");
let resultText = document.querySelector("#result-text");
let rightChoice = document.querySelectorAll("#right");
let wrongChoice = document.querySelectorAll("#wrong");

let questionOne = document.querySelector("#question-one");

let questionsArr = [
    document.querySelector("#question-two"),
    document.querySelector("#question-three"),
    document.querySelector("#question-four"),
    document.querySelector("#question-five"),
    document.querySelector("#question-six"),
    document.querySelector("#question-seven"),
    document.querySelector("#question-eight"),
    document.querySelector("#question-nine"),
    document.querySelector("#question-ten"),
    document.querySelector("#end-point")
]
//let questions = document.querySelectorAll(`[id^="question"]`);


let wrongAnswer = false;
let rightAnswer = true;
let score = 0;

//Will start the quiz and the countdown
startQuizButton.addEventListener("click", function () {
    questionOne.style.visibility = "visible";
    startingPoint.style.visibility = "hidden";
    countdown();
});


//Converts these NodeLists into an array
let rightChoiceArr = Array.from(rightChoice);
let wrongChoiceArr = Array.from(wrongChoice);
//let questionsArr = Array.from(questions);
console.log(questionsArr);
let choices = rightChoiceArr.concat(wrongChoiceArr);
console.log(choices);



//Displays message if either right or wrong
for (let i = 0; i < rightChoiceArr.length; i++) {
    rightChoiceArr[i].addEventListener("click", function() {
        sectionChange();
        displayCorrectMessage();
    });
}

for (let i = 0; i < wrongChoiceArr.length; i++) {
    wrongChoiceArr[i].addEventListener("click", function() {
        sectionChange();
        displayWrongMessage();
    });
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
    for (let i = 0; i < questionsArr.length; i++) {
        
        if (questionsArr[i].style.visibility != "visible") {
            questionsArr[i].style.visibility = "visible";
            if (i == questionsArr.length) {
                questionsArr[0].style.visibility = "visible";
            } //else {
                //questionsArr[i + 1].style.visibility = "visible";
            //}
        break
        }
    }
}

// function checkStatus(status) {
//     if (status === (questionsArr.style.visibility = "hidden")) {
    
//     }
// }