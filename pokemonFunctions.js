function randLetter()
{
    var alphabet = ["a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z"];
    var letterChosen = Math.round(Math.random() * alphabet.length);
    var i = 0;
    while(i!= alphabet.length)
    {if(i == letterChosen)
    {return alphabet[i];}
    i++;
}
   
}
console.log(randLetter());

function randWord()
{
    var words = ["alphabet","chair","bones","pizza","boneless","hot",
    "wings","food","water","coffee","tea","iced","fried","rice","chicken","sesame",
    "general","tso","soul","music","headphones","table","bottle","phone","charger","source"];
    var wordChosen = Math.round(Math.random() * words.length);
    
    for(var i =0;i<words.length;i++)
    {
    return words[wordChosen];
    }
    
}
   
console.log(randWord());

function randSentence()
{ 
    var sentence = "";
    var words = ["alphabet","chair","bones","pizza","boneless","hot",
    "wings","food","water","coffee","tea","iced","fried","rice","chicken","sesame",
    "general","tso","soul","music","headphones","table","bottle","phone","charger","source"];
    var numOfWords = Math.round(Math.random() * words.length);  
    for(n=0;n<numOfWords;n++)
    {
    var numWord = Math.round(Math.random() * words.length);
    var wordChosen = words[numWord];
    sentence += wordChosen + " ";
    }
console.log(sentence + ".");
}
randSentence();