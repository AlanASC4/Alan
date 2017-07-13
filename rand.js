function rand(number)
{
    var randomDecimalNumber = Math.random() * number;
    console.log(randomDecimalNumber);
    var randWholeNumber = Math.round(randomDecimalNumber);
    console.log(randWholeNumber);
    
}

(rand(6));