//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var playerChoice = $("#playerChoice").val();
    var cpuChoice = $("#cpuChoice").val();
    console.log(playerChoice + " : " + cpuChoice);

    //Update database here
    var text = {        
        PLAYERCHOICE : playerChoice,
        CPUCHOICE : cpuChoice
    }
    database.push(text);
}

database.on("child_added", function(rowData){
    var row = rowData.val();
    var playerChoice = row.PLAYERCHOICE;
    var cpuChoice = row.CPUCHOICE;

    var fullText = "<p>" + playerChoice + " : " + cpuChoice + "</p>";
    $(".allCpuChoices").append(fullText);
});

// function setchoice(choice)
// {
//     console.log(this)
// }
var playerScore;
var cpuScore;
var playerChoice = ""; 
var cpuChoice;
function setChoice(choice)
{
    playerChoice= choice;
    console.log(playerChoice);
    $("body").append("<h1>"+ playerChoice +" </h1>")
}

function getCpu(){
cpuChoice = Math.random();

if (cpuChoice <= 0.34){
    cpuChoice = "scissors";
    
}
    if (cpuChoice <= 0.67){
    cpuChoice = "paper";
    
}
    if (cpuChoice >= 0.68){
    cpuChoice = "rock";
    }
     $("body").append("<h1>"+ cpuChoice + "</h1>")
console.log(cpuChoice);
}
var compChoice = cpuChoice;

function playRps(){//Player choose Rock
    
if (playerChoice == cpuChoice )
    {
        // console.log("CPU wins");
        $("body").append("<h1> It's a tie </h1>")
    }

if (playerChoice == "rock" && cpuChoice == "scissors")
    {
        // console.log("Rock wins");
        $("body").append("<h1> Player wins </h1>")
        playerScore = playerScore++;
    }
if (playerChoice == "rock" && cpuChoice == "paper")
{
        $("body").append("<h1> Cpu Wins </h1>");
        cpuScore = cpuScore++;
}


//Player choose Paper
if (playerChoice == "paper" && cpuChoice == "scissors")
    {
        // console.log("CPU wins");
        $("body").append("<h1>  CPU wins </h1>")
        cpuScore = cpuScore++;
    }

if (playerChoice == "paper" && cpuChoice == "rock")
    {
        // console.log("Player wins");
        $("body").append("<h1>  Player wins </h1>")
        playerScore = playerScore++;
    }


//Player choose Scissors
if (playerChoice == "scissors" && cpuChoice == "paper")
{
    // console.log("Player's Scissors beats CPU's Paper");
    $("body").append("<h1>  Player wins </h1>")
    playerScore = playerScore++;
}

if (playerChoice == "scissors" && cpuChoice == "rock")
{
    // console.log("Player's Scissors beats CPU's Rock");
    $("body").append("<h1>  CPU wins </h1>")
    cpuScore = cpuScore++;
}
}

