//starts timer at 10
var startTime = 60;
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
//list of high scores
var listofhighscores;
//console.log(localStorage.getItem("listofhighscores"))
if (localStorage.getItem("listofhighscores") === null) {
    console.log("Inside if statement");
    listofhighscores = [];
} else {
    listofhighscores = JSON.parse(localStorage.getItem("listofhighscores"))
    console.log("else");
};
console.log(listofhighscores);
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
    question: "What is the most common way to style a webpage?",
    choice1: "CSS",
    choice2: "MongoDB",
    choice3: "React",
    choice4: "HTML",
    answer: "CSS"
}, {

    question: "How can you make an unordered list?",
    choice1: "li",
    choice2: "list",
    choice3: "unordered list",
    choice4: "ul",
    answer: "ul"
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
        //object.addEventListener("click", myScript);
        console.log(event.target.innerHTML);
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
    console.log(answer);
    if (answer===questions[counterIndex].answer) {
        // console.log(answer);
        // console.log(question[counterIndex].answer);
        console.log("correct");
        score = score+10;
    }
    else {
        console.log("incorrect");
        startTime -= 10;
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


//Use local storage to store initials and scores
var nameInput = document.getElementById('myname')
// document.querySelector('endButton').addEventListener('click', function(event){
//     showScore;
// });

//To show saved scores after typing in name and clicking the submit button
// function showScore() {
    //Click button to start quiz
    console.log(document.URL.includes("index.html"));
if (document.URL.includes("index.html")) {
    document.getElementById("startButton").addEventListener("click", takeQuiz)
    document.getElementById("submit").addEventListener("click", function(event) { 
        event.preventDefault()
        console.log("This is the final score" + score);
        console.log("This is the name input" + nameInput.value);
        listofhighscores.push({name: nameInput.value, score: score});
        localStorage.setItem("listofhighscores", JSON.stringify(listofhighscores))
        //localStorage.setItem("name", nameInput.value);
        //localStorage.setItem("score", score);
        location.href = "highscore.html";
    //var scoreName = document.createElement('li')
    
});

}
    
if (document.URL.includes("highscore.html")) {

console.log("We're in the high score page!");
//let finalName = localStorage.getItem("name");
//let finalScore = localStorage.getItem("score");
/*var scoreList = document.createElement("h3")
scoreList.innerHTML = `${finalName} <span>Score: ${finalScore}</span>` 
document.getElementById("listhighscores").appendChild(scoreList);*/
}

for (let i = 0; i < listofhighscores.length; i += 1) {
    var p = document.createElement('h3');
    p.innerText = listofhighscores[i].name+ ": "+listofhighscores[i].score;
    document.getElementById("listhighscores").appendChild(p);
  }





   //for loop and console log to see what it is each name and each score; do in the if statement; do 209 and 210



//JSON.parse(window.localStorage.getItem("score"));
//get score and display in the h2 heading for highest





//if correct answer is chosen, add one point to score and show the word "correct" else show the word incorrect and subtract 5 seconds from timer

//when last question is completed, add score and show on final screen


//To Do
//Show score
//Add CSS
//Update to realistic timer

//use <a href=""/home">Retake</