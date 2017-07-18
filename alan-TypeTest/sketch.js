function setup()
{
    createCanvas(500,500);
    background(225);
    s = "Enter the Following Sentence:(Case Sensitive)";
    fill(50);
    textSize(20);
    text(s, 50,50);
    
    p = "Points: ";
    fill(50);
    textSize(25);
    text(p, 375, 480);

    s = "The quick brown fox jumped over the lazy dog.";
    fill(50);
    textSize(15);
    text(s,100,150);
}
    var value = 0;
    function draw() 
{
    fill(value);
    rect(100, 160, 310, 50);
}
    function keyTyped() 
{
    var sentence = "";
    while( key != 0)
    {
    if (key === 'a') 
{
    console.log('a');
}   else if (key === 'b') 
{
    console.log('b');
}
    if (key === 'c') 
{
    console.log('c');
} 
    if (key === 'd') 
{
    console.log('d');
}     if (key === 'e') 
{
    console.log('e');
}     if (key === 'f') 
{
    console.log('f');
}     if (key === 'f') 
{
    console.log('g');
}     if (key === 'h') 
{
    console.log('h');
}     if (key === 'i') 
{
    console.log('i');
}     if (key === 'j') 
{
    console.log('j');
}     if (key === 'k') 
{
    console.log('k');
}     if (key === 'l') 
{
    console.log('l');
}     if (key === 'm') 
{
    console.log('n');
}     if (key === 'o') 
{
    console.log('0');
}     if (key === 'p') 
{
    console.log('p');
}     if (key === 'q') 
{
    console.log('q');
}     if (key === 'r') 
{
    console.log('r');
} 

  // uncomment to prevent any default behavior
  return false;

}
}    

