function setup() {
  createCanvas(500, 700);
  background (25);
  rect(0,325,500,25);
  
}

var pcGrid = [[],[],[],[],[]];
function draw()
{
    var pGrid = [(rect(25,25,25,25)),(rect(50,25,25,25)),
  (rect(75,25,25,25)),(rect(100,25,25,25)),(rect(125,25,25,25)),
  (rect(150,25,25,25)),(rect(175,25,25,25)),(rect(200,25,25,25)),
  (rect(225,25,25,25)),(rect(250,25,25,25)),(rect(25,50,25,25)),
  (rect(50,50,25,25)),(rect(75,50,25,25)),(rect(100,50,25,25)),
  (rect(125,50,25,25)),(rect(150,50,25,25)),(rect(175,50,25,25)),
  (rect(200,50,25,25)),(rect(225,50,25,25)),(rect(250,50,25,25)),
  (rect(25,75,25,25)),(rect(50,75,25,25)),(rect(75,75,25,25)),
  (rect(100,75,25,25)),(rect(125,75,25,25)),(rect(150,75,25,25)),
  (rect(175,75,25,25)),(rect(200,75,25,25)),(rect(225,75,25,25)),
  (rect(250,75,25,25)),(rect(25,100,25,25)),(rect(50,100,25,25)),
  (rect(75,100,25,25)),(rect(100,100,25,25)),(rect(125,100,25,25)),
  (rect(150,100,25,25)),(rect(175,100,25,25)),(rect(200,100,25,25)),
  (rect(225,100,25,25)),(rect(250,100,25,25)),(rect(25,125,25,25)),
  (rect(50,125,25,25)),(rect(75,125,25,25)),(rect(100,125,25,25)),
  (rect(125,125,25,25)),(rect(150,125,25,25)),(rect(175,125,25,25)),
  (rect(200,125,25,25)),(rect(225,125,25,25)),(rect(250,125,25,25)),
  (rect(25,150,25,25)),(rect(50,150,25,25)),(rect(75,150,25,25)),
  (rect(100,150,25,25)),(rect(125,150,25,25)),(rect(150,150,25,25)),
  (rect(175,150,25,25)),(rect(200,150,25,25)),(rect(225,150,25,25)),
  (rect(250,150,25,25)),(rect(25,175,25,25)),(rect(50,175,25,25)),
  (rect(75,175,25,25)),(rect(100,175,25,25)),(rect(125,175,25,25)),
  (rect(150,175,25,25)),(rect(175,175,25,25)),(rect(200,175,25,25)),
  (rect(225,175,25,25)),(rect(250,175,25,25)),(rect(25,200,25,25)),
  (rect(50,200,25,25)),(rect(75,200,25,25)),(rect(100,200,25,25)),
  (rect(125,200,25,25)),(rect(150,200,25,25)),(rect(175,200,25,25)),
  (rect(200,200,25,25)),(rect(225,200,25,25)),(rect(250,200,25,25)),
  (rect(25,225,25,25)),(rect(50,225,25,25)),(rect(75,225,25,25)),
  (rect(100,225,25,25)),(rect(125,225,25,25)),(rect(150,225,25,25)),
  (rect(175,225,25,25)),(rect(200,225,25,25)),(rect(225,225,25,25)),
  (rect(250,225,25,25)),(rect(25,250,25,25)),(rect(50,250,25,25)),
  (rect(75,250,25,25)),(rect(100,250,25,25)),(rect(125,250,25,25)),
  (rect(150,250,25,25)),(rect(175,250,25,25)),(rect(200,250,25,25)),
  (rect(225,250,25,25)),(rect(250,250,25,25))];
function randBlock(){
    console.log(pGrid[Math.round(Math.random() * pGrid.length - 1 )])
}
  
  
  pGrid[0].fill("Green");
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);
}



var xCoord = 0;
var yCoord = 0;

function setup() {
    createCanvas(450, 450);
    rectMode(CORNERS);
    background(0);
    fill(255);

   strokeWeight(1);
    line(50, 0, 50, height);
    line(100, 0, 100, height);
    line(150, 0, 150, height);
    line(200, 0, 200, height);
    line(250, 0, 250, height);
    line(300, 0, 300, height);
    line(350, 0, 350, height);
    line(400, 0, 400, height);

   line(0, 50, width, 50);
    line(0, 100, width, 100);
    line(0, 150, width, 150);
    line(0, 200, width, 200);
    line(0, 250, width, 250);
    line(0, 300, width, 300);
    line(0, 350, width, 350);
    line(0, 400, width, 400);
}

var playerGrid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0, 0]];
var computerGrid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]];

var carrier = 5;
var battleship = 4;
var cruise = 3;
var submarine = 3;
var destroyer = 2;



//function place(object) {
 //   if (object == "ship") {

  // }
    //else if (object == "miss") {

   //}
    //else if (object == "hit")
//}

var placeShip;

function keyPressed() {
    placeShip = false;
    if (keyCode == LEFT_ARROW) {
        if (xCoord >= 50) {
            xCoord -= 50;
        }
    }
    else if (keyCode == RIGHT_ARROW) {
        if (xCoord < 400) {
            xCoord += 50;
        }

   }
    else if (keyCode == UP_ARROW) {
        if (yCoord >= 50) {
            yCoord -= 50;
        }

   }
    else if (keyCode == DOWN_ARROW){
        if (yCoord < 400) {
            yCoord += 50;
        }
    }
    else if (keyCode == ENTER) {
        placeShip = true;
    }
}

//function mouseClicked() {

//}

function draw() {
    
   stroke(255);
    strokeWeight(5);
    fill(0);
    rect(xCoord, yCoord, xCoord + 50, yCoord + 50);

   if (placeShip) {
        noStroke();
        fill("green");
        rect(xCoord, yCoord, xCoord + 50, yCoord + 50);
    }
    //textSize(10);
    //textAlign(CENTER);
    //fill(255);
    //text("Place your ships!", width/2, 440);
}