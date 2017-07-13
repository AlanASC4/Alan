var playerChoice = "r";
var cpuChoice = "s";
if (playerChoice == "r" && cpuChoice == "p")
    {console.log("CPU's Paper beats Player's Rock");}

if (playerChoice == "r" && cpuChoice == "s")
    {console.log("Player's Rock beats CPU's Scissors");}

if (playerChoice == cpuChoice)
    {console.log("Player and CPU Chose the same, Its a Tie!");}

if (playerChoice == "p" && cpuChoice == "s")
    {console.log("CPU's Scissors beats Player's Paper");}

if (playerChoice == "p" && cpuChoice == "r")
    {console.log("Player's Paper beats CPU's Rock");}

if (playerChoice == "s" && cpuChoice == "p")
    {console.log("Player's Scissors beats CPU's Paper");}

if (playerChoice == "s" && cpuChoice == "r")
    {console.log("Player's Scissors beats CPU's Rock");}