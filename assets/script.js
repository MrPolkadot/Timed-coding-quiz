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
    seconds = 60; //Change it to 60 in the future.
    let timeInterval = setInterval(function () {
        if (seconds <= 0) {
            questionsArr[9].style.visibility = "visible";
            resultText.style.display = "none";
            timer.textContent = "";
        }
        if (seconds > 0) {
            timer.textContent = seconds;
            seconds--;
        }
        else {
            timer.textContent = "";
            clearInterval(timeInterval);
        }
        if (rightChoiceArr[9]) {
            resultText.textContent = "";
        }
    }, 1000);
};

//Displays message if either right or wrong
for (let i = 0; i < rightChoiceArr.length; i++) {
    rightChoiceArr[i].addEventListener("click", function () {
        sectionChange();
        if (rightChoiceArr) {
            finalScore += 10;
            score.textContent = finalScore;
            resultText.textContent = "Correct";
        }
    });
}

for (let i = 0; i < wrongChoiceArr.length; i++) {
    wrongChoiceArr[i].addEventListener("click", function () {
        sectionChange();
        if (wrongChoiceArr) {
            seconds -= 5;
            resultText.textContent = "Wrong";
        }
    });
};


//Changes the visibility of each section
function sectionChange() {
    for (let i = 0; i < questionsArr.length; i++) {

        if (questionsArr[i].style.visibility != "visible") {
            questionsArr[i].style.visibility = "visible";
            break
        }

    }

}

//Grabs the elements for the last two sections of the page
let userInitials = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit-initials");
let retry = document.querySelector("#retry");
let scoreBoard = document.querySelector("#score-board");
let scoreSection = document.querySelector("#score-section");
let newUserInput = document.querySelector("#new-user");
let retakeBtn = document.querySelector("#retake");
let infoForm = document.querySelector("#info-form");


//When initials are submitted, a table is created in the score section.
submitBtn.addEventListener("click", function (event) {
    let row1 = document.createElement("tr");
    let head1 = document.createElement("th");
    let head2 = document.createElement("th");
    let row2 = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    head1.textContent = "Name";
    head2.textContent = "Score";
    c1.textContent = userInitials.value;
    c2.textContent = finalScore;
    row1.appendChild(head1);
    row1.appendChild(head2);
    row2.appendChild(c1);
    row2.appendChild(c2);
    newUserInput.appendChild(row1);
    newUserInput.appendChild(row2);
    event.preventDefault();
    console.log(newUserInput);
});


scoreBoard.addEventListener("click", function (event) {
    event.preventDefault();
    scoreSection.style.visibility = "visible";
})

//These 2 buttons will return to the starting point of the quiz.
retry.addEventListener("click", function () {
    location.reload();
});

retakeBtn.addEventListener("click", function () {
    location.reload();
});
