var startTime = 10;
var counterIndex = 0;
var listQuestions = document.getElementById("listQuestions")
var timerElement = document.getElementById("timer")
var timerId;
var score = 0;
var highScore = document.getElementById("high")

//getElementByID(startButton).addEventListener("click", timer);

//if user chooses the correct answer, they get one point otherwise no points

//if user chooses the correct answer, it shows the word correct

//if user chooses the incorrect answer, they lose 5 seconds

//either way, the next question shows
function quiz () {
    

}

//List of questions
let questions = [ {
    question: "What is the file extension for JavaScript?",
    choice1: ".js",
    choice2: ".html",
    choice3: ".script",
    choice4: ".java",
    answer: ".js",
}, {
    question: "What allows the program to display a dialog box that will notifiy the user that an expected even has occurred?",
    choice1: "alert",
    choice2: "command",
    choice3: "link",
    choice4: "display",
    answer: "alert",

}, {
    question: "What event occurs when the user clicks on an HTML element?",
    choice1: "onmouseclick",
    choice2: "onclick",
    choice3: "onmouseover",
    choice4: "clickelement",
    answer: "onclick",
}, {
    question: "How does a FOR loop start?",
    choice1: "for (i <= 8; i++)",
    choice2: "for (i = 0; i <= 8; i++)",
    choice3: "for i = 1 to 8",
    choice4: "for (i = 0; i <= 8)",
    answer: "for (i = 0; i <= 8; i++)"
}, {

    question: "What is the correct way to link to the external script called script.js?",
    choice1: "<script src = 'script.js'>",
    choice2: "<script href = 'script.js'>",
    choice3: "<script name = 'script.js'>",
    choice4: "<a href='script.js'>",
    answer: "<script src = 'script.js'>"
}

];



//Click button to start quiz
document.getElementById("startButton").addEventListener("click", takeQuiz)

function checkAnswer(answer) {
    if (answer===questions[counterIndex].answer) {
        console.log("correct");
        score = score+10;
    }
    else {
        console.log("incorrect");
        startTime -= 3;
    }
    counterIndex++;
    
    if (counterIndex === questions.length) {
         endQuiz();
    } else {
    showQuestion();
    }
}
//Shows questions
function showQuestion () {
    listQuestions.innerHTML = "";

    var questionElement = document.createElement("h2")
    questionElement.textContent = questions[counterIndex].question;
    listQuestions.append(questionElement);

    var choiceOne = document.createElement("button")
    choiceOne.textContent = questions[counterIndex].choice1;
    choiceOne.onclick = function(event) {
        //console.log(event.target.innerHTML);
        checkAnswer(event.target.innerHTML);
    };
    listQuestions.append(choiceOne);

    var choiceTwo = document.createElement("button")
    choiceTwo.textContent = questions[counterIndex].choice2;
    choiceTwo.onclick = function(event) {
        checkAnswer(event.target.innerHTML)};
    listQuestions.append(choiceTwo);

    var choiceThree = document.createElement("button")
    choiceThree.textContent = questions[counterIndex].choice3;
    choiceThree.onclick = function(event) {
        checkAnswer(event.target.innerHTML)};
    listQuestions.append(choiceThree);

    var choiceFour = document.createElement("button")
    choiceFour.textContent = questions[counterIndex].choice4;
    choiceFour.onclick = function(event) {
        checkAnswer(event.target.innerHTML)};
    listQuestions.append(choiceFour);
};

//Go through questions
function takeQuiz () {
    document.querySelector("#startPage").style.display="none";
    timerElement.textContent = startTime;
    timerId = setInterval(clockTick, 1000);
    showQuestion(); 
};

function clockTick () {
    startTime--;
    timerElement.textContent = startTime;
    if (startTime <= 0) {
        clearInterval(timerId);
        endQuiz();
    }
}

//Function for what to do when the timer runs out which is to go to a new page so initials can enter with timer
function endQuiz() {
    // alert("quiz is over!");
    // window.location.href = "./results.html"
    listQuestions.style.display = "none";
    document.getElementById("endGame").style.display = "block";
    console.log(highScore);
    highScore.textContent = score;

};


//Use local storage to store intials and scores
var nameInput = document.querySelector('myname')
window.localStorage.setItem("name", nameInput);
window.localStorage.getItem("name");
window.localStorage.setItem("score", JSON.stringify(highscore));
window.localStorage.getItem("score");
document.querySelector('endButton').addEventListener('click', function(event){
    showScore;
});

function showScore() {
    var scoreName = document.createElement('li')
    nameInput.textContent = nameInput;
    scoreName.appendChild(nameInput);
    //document.getElementById("highest").appendChild(nameInput);
}
//JSON.parse(window.localStorage.getItem("score"));
//get score and display in the h2 heading for highest



//setTimeout is a method that executes a particular function after a specific amount of time has elapsed
// setTimeout(endQuiz, 5000);

//setInterval is a method repeatedly executes a particular function after a specific amount of time; it will continue until specified otherwise

//I think I want setInterval because time is decreased if an answer is incorrect.



//if correct answer is chosen, add one point to score and show the word "correct" else show the word incorrect and subtract 5 seconds from timer

//when last question is completed, add score and show on final screen


//To Do
//Save initials to save high score
//Show score
//Add CSS
//Update to realistic timer