//PROBLEMS:
//Now no buttons (for each to create them wasn't working)
//No button or function to go to next set of questions
//No local storage (going to work on it)
//No keeping track of score function

//Things for me to do:
//How to hide and show elements in JS
//
let mainCard = document.getElementById("card1");
let mainBody = document.getElementById("cardtext");
//Variable that references timer
let timer = document.getElementById("timer");
//Variable that references start button
let start = document.getElementById("btn1");
//Variable that references the highscores button
let highscores = document.getElementById("highscores");
//Variable that references the div that contains the scores
let card2 = document.getElementById("card2");
//Variable storing current score:
let currentScore = document.getElementById("currentscore");
//Where intials are entered (input tag)
let userName = document.getElementById("username");
//Add button for adding scores
let addBtn = document.getElementById("add");
//Empty p tag where scores are going to be stored
let scorelist = document.getElementById("scorelist")

addBtn.addEventListener("click", logScore);

function logScore(e){
    e.preventDefault();
    let pTag = document.createElement("p");
    pTag.innerHTML = userName.value;
    scorelist.appendChild(pTag);
}


//Score value that will increase as questions are answered
let score = 0;
//How much time is left
let secondsLeft = 75;
//Globally initializing this variable for the questions later on
let index = 0;

//Array with all the choices keys (answers)
let currentChoices = "";
// [questions[index].choices[0], questions[index].choices[1], questions[index].choices[2], questions[index].choices[3]]
//Variable declaring correct answer at position index
let currentAnswer = questions[index].answer;

//Sets the timer (inside of the start button click event)
function setTime(){
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent= `Time: ${secondsLeft}`;
            if(secondsLeft === 0){
                clearInterval(timerInterval);
                sendMessage()
            }
    }, 1000)
}
//Displays GAME OVER image when time runs out, erases whatever is on the page
function sendMessage() {
    setBlank();
    let img = document.createElement("img");
    mainCard.appendChild(img);
    img.setAttribute("src", "assets/images/gameover.jpg");
}
//Start button event listener
start.addEventListener("click", startQuiz);
//function that gets the ball rolling
function startQuiz(){
    setTime();
    displayQuestion();
}
//Resets the contents of the page
function setBlank(){
    mainCard.textContent=" ";
    mainBody.textContent=" ";
}
//Shows the next question, creates the answer buttons, removes start button
function displayQuestion(){
    setBlank();
    //Variable declaring each question at position index
    let currentQuestion = questions[index].title;
    //Setting the title are to the current question
    mainCard.textContent = currentQuestion;
    currentChoices.textContent = " ";
    //forEach that creates each button from choices at position index
    questions[index].choices.forEach(function(choice, i){
        let newBtn = document.createElement("button");
        newBtn.setAttribute("class", "choice btn btn-primary btn-sm");
        newBtn.setAttribute("style", "margin-right: 5px")
        newBtn.setAttribute("value", choice);
        newBtn.textContent = `${i + 1}. ${choice}`;
        newBtn.addEventListener("click", function(e){
            e.preventDefault();
            if(e.target.value === questions[index].answer){
                score += 10;
                alert("Correct!");
            } else {
                score -= 5;
                alert("Incorrect, try again!");
            }
            console.log(questions[index].answer);
        })
        mainBody.appendChild(newBtn);
    })
    currentScore = score
    //gets rid of start button
    start.remove();
    //Creation of next button
    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "btn btn-primary")
    nextBtn.textContent = "Next";
    mainBody.appendChild(nextBtn);
    nextBtn.addEventListener("click", nextQuestion);
};
//Function that increments index and calls the displayQuestion function to show us the next Q
function nextQuestion(){
    index++;
    displayQuestion();
}
    
    
    // newBtn1.setAttributes(newBtn1, {"class": "btn btn-primary btn-sm", "style": "margin-right: 5px"})
    // newBtn1.setAttribute("style", "margin-right: 5px");
    // newBtn1.setAttribute("class", "btn btn-primary btn-sm");
    // newBtn1.setAttribute("style", "margin-right: 5px");
    // mainBody.appendChild(newBtn1);
    // newBtn1.textContent = currentChoices[0];
    // let newBtn2 = document.createElement("button");
    // newBtn2.setAttribute("class", "btn btn-primary btn-sm");
    // newBtn2.setAttribute("style", "margin-right: 5px");
    // mainBody.appendChild(newBtn2);
    // newBtn2.addEventListener("click", displayQuestion);
    // newBtn2.textContent = currentChoices[1];
    // let newBtn3 = document.createElement("button");
    // newBtn3.setAttribute("class", "btn btn-primary btn-sm");
    // newBtn3.setAttribute("style", "margin-right: 5px");
    // mainBody.appendChild(newBtn3);
    // newBtn3.addEventListener("click", displayQuestion);
    // newBtn3.textContent = currentChoices[2];
    // let newBtn4 = document.createElement("button");
    // newBtn4.setAttribute("class", "btn btn-primary btn-sm");
    // mainBody.appendChild(newBtn4);
    // newBtn4.textContent = currentChoices[3];
    // index++;
    // start.remove();
    // for(let i=0; i<questions.length; i++){

    // }
    // if(currentChoices[0] === currentAnswer){

    // }
// }


function wrongAnswer(){
    secondsLeft - 10
    displayQuestion();
};