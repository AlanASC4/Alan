var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(1000, 500);
  background (25);
}

function draw() {

	//distance from center of the screen
	var d = dist(windowWidth/24, windowHeight/24, 1, 1);
    background(10);
  	fill ("white");
  	ellipse (x, y, d, d);
    

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > (1000 - 25) || x < (0 + 25))  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > (500 - 25) || y < (0 + 25)) {
	 	  yspeed = -yspeed;
  	}

}

