console.log("CODE QUIZ");

let seconds;
let timer = document.querySelector("#timer");
let startingPoint = document.querySelector("#starting-point");
let startQuizButton = document.querySelector("#start-quiz-button");
let questions = document.querySelectorAll(`[id^="question"]`);
let rightAnswer = document.querySelectorAll("#right");
let wrongAnswer = document.querySelectorAll("#wrong");
console.log(questions);
console.log(rightAnswer);


//Work on this
function wrongChoice() {
    for (let i = 0; i < wrongAnswer.length; i++) {
        wrongAnswer[i].addEventListener("click", (e));
    }
}

startQuizButton.addEventListener("click", countdown);
startQuizButton.addEventListener("click", sectionChange) //Function that will start the quiz/change section.


//Counts down the timer once quiz is started.
function countdown() {
    seconds = 10; //Change it to 60 in the future.
    let timeInterval = setInterval(function () {
        //subtract 3 seconds each time wrong is chosen.
        //if (wrongAnswer) {
            //seconds = seconds - 3;
        //}
        if (seconds > 0) {
            timer.textContent = seconds;
            seconds--;
        }  else {
            timer.textContent = "0";
            clearInterval(timeInterval);
            //Enter function here that will stop the game and send you to endpoint section.
        }
    }, 1000);
}

//Work on how to change to each section after clicking right or wrong.
function sectionChange() {
    if (startQuizButton) {
        questions[0].style.visibility = "visible";
    } 
    if (wrongAnswer) {
        questions[1].style.visibility = "visible";
        wrongChoice();
    }
};


