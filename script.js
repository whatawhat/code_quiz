//starts timer at 10
var startTime = 10;
//counter index starts at 0 for questions arrange
var counterIndex = 0;
//list questions and get them by the id in HTML
var listQuestions = document.getElementById("listQuestions")
//this is the timer and goes in the timer at the top of the page
var timerElement = document.getElementById("timer")
//holds the timer for the quiz to go down
var timerId;
//holds the score
var score = 0;
//score results from quiz and goes to end game secion
var highScore = document.getElementById("myScore")



//either way, the next question shows
function quiz () {
    
}

//Click button to start quiz
document.getElementById("startButton").addEventListener("click", takeQuiz)


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

//Check answers
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



//Timer ticker that counts down
function clockTick () {
    startTime--;
    timerElement.textContent = startTime;
    if (startTime <= 0) {
        clearInterval(timerId);
        endQuiz();
    }
}

//What to do when the timer runs out
function endQuiz() {
    // alert("quiz is over!");
    // window.location.href = "./results.html"
    listQuestions.style.display = "none";
    document.getElementById("endGame").style.display = "block";
    console.log(highScore);
    highScore.textContent = score;
};


//Create an input element for initials
// initTextEL = document.createElement("input");
// initTextEL.setAttribute("id", "initials-input");
// initTextEL.setAttribute("type", "text");
// initTextEL.setAttribute("name", "initials");
// initTextEL.setAttribute("placeholder", "Enter Initials Here");
// inNameEl.appendChild(initTextEL);

//Create save button element
// saveButtonEl = document.createElement("button");
// saveButtonEl.setAttribute("id" , "save-btn");
// saveButtonEl.setAttribute("class" ,"save-btn");
// saveButtonEl.setAttribute("type" , "submit");
// saveButtonEl.textContent = "Save Score";

// inNameEl.appendChild(saveButtonEl);
// inNameEl.addEventListener("submit", score);



//Use local storage to store intials and scores
var nameInput = document.getElementById('myname')
var showScore = document.getElementById('myScore')
window.localStorage.setItem("name", nameInput);
window.localStorage.getItem("name");
window.localStorage.setItem("score", showScore);
window.localStorage.getItem("score");
// document.querySelector('endButton').addEventListener('click', function(event){
//     showScore;
// });

//To show saved scores after typing in name and clicking the submit button
// function showScore() {
    document.getElementById("submit").addEventListener("click", function(event) { 
    var scoreName = document.createElement('li')
    //commented out recently
    // nameInput.textContent = nameInput;
    // scoreName.appendChild(nameInput);
    var userName = window.localStorage.getItem("name");
    var userScore = window.localStorage.getItem("score");
    console.log(userName + userScore);
    event.preventDefault()
    //document.getElementById("highest").appendChild(nameInput);
});

// showScore();

console.log(showScore);

//Show name and score in the High Scores section
// function showTopScores() {
//     document.getElementById("submit").addEventListener("click", )
// }

//First, before displaying it. I would first getItem and save it to a variable and console log that variable to make sure it’s what you expect
//Use appendChild to dipslay it


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

//use <a href=""/home">Retake</