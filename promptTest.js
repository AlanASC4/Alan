function askquestion()
{   var question = "";
    var ask = prompt("Ask A qestion",question);
    if (ask != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
    }
}
