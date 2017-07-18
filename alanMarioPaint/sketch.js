function setup()
{
    createCanvas(1000,1000);
    background(225);
}
 function mouseDragged()
 {
    var randNum = Math.round(Math.random() * 2);
    if(randNum == 0)
    {
        ellipse(mouseX, mouseY, 30, 15);
    }
    else if(randNum == 1)
    {
        rect(mouseX,mouseY,30,15);
    }
    else if (randNum == 2)
    {triangle(mouseX, mouseY, mouseX + 10, mouseY + 10, mouseX - 10, mouseY +10);
    }
    // prevent default
    return false;
 }
 