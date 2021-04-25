var startTime = 30;
var counterIndex = 0;
var listQuestions = document.getElementById("listQuestions")



//getElementByID(startButton).addEventListener("click", timer);

//This function will run the quiz allowing user to select answers

//if user chooses the correct answer, they get one point otherwise no points

//if user chooses the correct answer, it shows the word correct

//if user chooses the incorrect answer, they lose 5 seconds

//if user chooses the incorrect answer, the word incorrect shows

//either way, the next question shows
function quiz () {
    





}

//If I have to move questions to js file
// let questions = [
// ["What is the file extension for JavaScript?", ".js", ".html", ".script", ".java"],

// ["What allows the program to display a dialog box that will notifiy the user that an expected even has occurred?", "alert", "command", "link", "display"],

// ["JavaScript is the same as Java.", "False", "True"],

// ["What event occurs when the user clicks on an HTML element?", "onmouseclick", "onclick", "onmouseover", "clickelement"],

// ["Is JavaScript case-sensitive?", "Yes", "No"],

// ["How does a FOR loop start?", "for (i <= 8; i++<", "for (i = 0; i <= 8; i++", "for i = 1 to 8", "for (i = 0; i <= 8)"]

// ]
// console.table(questions);

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
}

];

//console.log(questions[0].question)


// function startQuiz () {
//     document.getElementById("startButton").click();
    
// }
document.getElementById("startButton").addEventListener("click", takeQuiz)

function checkAnswer(answer) {
    if (answer===questions[counterIndex].answer) {
        console.log("correct");
    }
    else {
        console.log("incorrect");
    }
    counterIndex++;
    showQuestion();
    
}

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
    choiceTwo.onclick = checkAnswer;
    listQuestions.append(choiceTwo);

    var choiceThree = document.createElement("button")
    choiceThree.textContent = questions[counterIndex].choice3;
    choiceThree.onclick = checkAnswer;
    listQuestions.append(choiceThree);

    var choiceFour = document.createElement("button")
    choiceFour.textContent = questions[counterIndex].choice4;
    choiceFour.onclick = checkAnswer;
    listQuestions.append(choiceFour);
};

//Go through questions
function takeQuiz () {
    document.querySelector("#startPage").style.display="none";
    showQuestion();


    
};



//start with a for loop

//if correct answer is chosen, add one point to score and show the word "correct" else show the word incorrect and subtract 5 seconds from timer

//when last question is completed, add score and show on final screen