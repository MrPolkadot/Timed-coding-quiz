console.log("CODE QUIZ");

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

let score = document.querySelector("#score");
let finalScore = 0;
let seconds;

//Will start the quiz and the countdown
startQuizButton.addEventListener("click", function () {
    questionOne.style.visibility = "visible";
    startingPoint.style.visibility = "hidden";
    countdown();
});


//Converts these NodeLists into an array
let rightChoiceArr = Array.from(rightChoice);
let wrongChoiceArr = Array.from(wrongChoice);

let choices = rightChoiceArr.concat(wrongChoiceArr);


//Counts down the timer once quiz is started.
function countdown() {
    seconds = 10; //Change it to 60 in the future.
    let timeInterval = setInterval(function () {
        if (seconds <= 0) {
            questionsArr[9].style.visibility = "visible";
        }
        if (seconds > 0) {
            timer.textContent = seconds;
            seconds--;
        } 
        else {
            timer.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
};


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



function displayCorrectMessage() {
    if (rightChoiceArr) {
        finalScore += 10;
        score.textContent = finalScore;
        
        resultText.textContent = "Correct";
    }
    return finalScore;
};

function displayWrongMessage() {
    if (wrongChoiceArr) {
        seconds -= 5;
    resultText.textContent = "Wrong";
    }
};

//Changes the visibility of each section
function sectionChange() {
    for (let i = 0; i < questionsArr.length; i++) {
        
        if (questionsArr[i].style.visibility != "visible") {
            questionsArr[i].style.visibility = "visible";
            if (i == questionsArr.length) {
                questionsArr[0].style.visibility = "visible";
            }
        break
        }
    }
}


//Grabs the elements for the last two sections of the page
let userInitials = document.querySelector("#initials-input");
let submit = document.querySelector("#submit");
let retry = document.querySelector("#retry");
let scoreBoard = document.querySelector("#score-board");
let scoreSection = document.querySelector("#score-section");
let newUserInput = document.querySelector("#new-user");




// localStorage.setItem("user", initialsValue);
// localStorage.setItem("score", finalScore);

function saveInputValue() {
localStorage.setItem("score", finalScore);
localStorage.setItem("user", initialsValue);
};


//when clicked, save initials into localstorage and add them into the table.
submit.addEventListener("click", function() {
    let initialsValue = userInitials.value;
    if (initialsValue) {
        let tableData = document.createElement("tr");
        newUserInput.appendChild(tableData);
    }
    
    
    saveInputValue();
});


scoreBoard.addEventListener("click", function() {
    scoreSection.style.visibility = "visible";
})

//make function that goes to score-section after clicking check scores