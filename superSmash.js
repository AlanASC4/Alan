var battleMap = ["Narnia","Hogwarts","The Bronx Zoo","La Guardia Airport"];
var firstQuestion = [1,2,3,4,5];
var secondQuestion = ["Meta Knight","Ike","Lucario","Little Mac","Cloud"];
function Questions()
{
    var prompt = require('prompt-sync')();
    var questionPrompt1 = prompt("How many times will you Strike?(1,2,3,4,5)");
    var questionPrompt2 = prompt("Who will you fight?(Meta Knight, Ike, Lucario, Little Mac, Cloud)");
}
Questions();