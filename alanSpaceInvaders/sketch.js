var yellowY = 200;
var yellowX = 600;
var aquaY = 820;
var aquaX = 422;    
var x =400
var y =800
var isHit = false;

function setup() {
createCanvas(1000, 1000);
background("black");

}

function draw() {
  if (keyIsDown(LEFT_ARROW))
    {x-=5;
    }

if (keyIsDown(RIGHT_ARROW))
    {x+=5;
    }

  background("black");
    fill("blue");
    rect(x, y, 55, 55);
    if (x>= 1000 ){x=0}
  else if (x<= 0){x=1000}

 var c = color(105, 204, 5);
 fill(c);

rect( 70, 680, 100, 90);
 rect(260, 680, 100, 90);
 rect(450, 680, 100, 90);
 rect(640, 680, 100, 90);
 rect(830, 680, 100, 90);


//enemies
    fill("red");
    rect(70, 20, 50, 50);

   fill("red");
    rect(130,20,50,50);

   fill("red");
    rect(190,20,50,50);

   fill("red");
    rect(260,20,50,50);

   fill("red");
    rect(320,20,50,50);

   fill("red");
    rect(380,20,50,50);

   fill("red");
    rect(440,20,50,50);

   fill("red");
    rect(510,20,50,50);

   fill("red");
    rect(570,20,50,50);

   fill("red");
    rect(630,20,50,50);

   fill("red");
    rect(690,20,50,50);

   fill("red");
    rect(760,20,50,50);

   fill("red");
    rect(820,20,50,50);

   fill("red");
    rect(880,20,50,50);

if(yellowY >= y &&yellowY <= y+55 && yellowX >= x && yellowX <= x +55)
  {  
      isHit = true;
  }


   fill("yellow");
    yellowY += 5;
    rect(yellowX,yellowY,10,30);
    if (yellowY>= 1000 ){yellowY=60}
  else if (yellowY<= 0){yellowY=1000}
  
   var temp = x;  
  fill("aqua");
    aquaY -= 6;
    rect(temp,aquaY,10,30);
    if (aquaY<=0){aquaY=800}
else if (aquaY>=800){aquaY=0}

if(isHit == true)
{  
    fill("black");
    rect(x,y,200,200);
}
}