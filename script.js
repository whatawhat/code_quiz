var startTime = 30;



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
let questions = [
["What is the file extension for JavaScript?", ".js", ".html", ".script", ".java"],

["What allows the program to display a dialog box that will notifiy the user that an expected even has occurred?", "alert", "command", "link", "display"],

["JavaScript is the same as Java.", "False", "True"],

["What event occurs when the user clicks on an HTML element?", "onmouseclick", "onclick", "onmouseover", "clickelement"],

["Is JavaScript case-sensitive?", "Yes", "No"],

["How does a FOR loop start?", "for (i <= 8; i++<", "for (i = 0; i <= 8; i++", "for i = 1 to 8", "for (i = 0; i <= 8)"]

]
console.table(questions);