function setup()
    {
        createCanvas(300,300);
        background(225);
        ellipse(width/2,height/2,200);
        stroke("black");
        strokeWeight(5);
        fill("white");
        arc(width/2,height/2,200,200,0,PI,CHORD);
        fill("purple");
        arc(width/2,height/2,200,200,PI,0,CHORD);
        fill("purple");
        textSize(30);
        text("M", width/2,10,10,30);
        fill("white");
        ellipse(150,150,55,55);
        fill("white");
        ellipse(150,150,20,20);
    }
