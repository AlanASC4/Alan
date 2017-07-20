function setup() {
  createCanvas(1500, 1000);
  background("blue");
  function pokemon(name, move1, move2, hp, attack)
{
    this.name = name;
    this.move1 = move1;
    this.move2 = move2;
    this.hp = hp;
    this.attack = attack;
    

} 
    var charizard = {"name" : "Charizard",
    "move1": "Fire Blast","move2":"FlameThrower",
    "hp" : 266, "attack": 84};
    var pikachu = {"name": "Pikachu",
    "move1": "Iron Tail","move2":"Thunder Bolt",
    "hp": 150, "attack": 95};
    var chHp = charizard.hp;
    
    

}
 function draw(){
     fill("white");
     rect(20, 20, 200, 55);

                     fill("white");
                    rect(25,100,900,600);
                    strokeWeight(3);

                fill("black");
                rect(20,100,200,55)
    
                        textSize(32);
                        fill("white");
                        text("Turn:#", 50, 150);

                fill("black");
                 rect(25,500,200,55)

                            fill("black");
                            rect(600,300,200,55)

    fill("green");
    ellipse(150, 400, 100, 100);

    fill("yellow");
    ellipse(650, 200, 100, 100);


fill("red");
    rect(700,630,200,55)

    textSize(32);
      fill("white");
     text("ATTACK!", 720, 670);
     
     fill("white");
    rect(1250,650,230,320);
        textSize(32);
        fill("black");
        text("Moves:",1310,700);
        line(1250,720,1480,720);
        line(1250,845,1480,845);
    textSize(32);
      fill("white");
     text("HP1:#",35, 545);
    textSize(32);
      fill("white");
     text("HP2:#", 625, 350);
     

     
    textSize(40);
    fill("red");
    text(chHp,730, 350);

    textSize(40);
    fill("red");
    text(pikHp,140, 545);
    
    
}       
    function pokemon(name, move1, move2, hp, attack)
{
    this.name = name;
    this.move1 = move1;
    this.move2 = move2;
    this.hp = hp;
    this.attack = attack;
    
} 
    var charizard = {"name" : "Charizard",
    "move1": "Fire Blast","move2":"FlameThrower",
    "hp" : 266, "attack": 84};
    var pikachu = {"name": "Pikachu",
    "move1": "Iron Tail","move2":"Thunder Bolt",
    "hp": 150, "attack": 95};
    var chHp = charizard.hp;
    var pikHp = pikachu.hp;
    var pikAttack = pikachu.attack;
function mouseClicked()
{
    if (mouseX > 700 && mouseX < 900 && mouseY > 630 && mouseY < 685)
    {
        console.log("Charizard's was decreased by 95!");
        chHp = chHp - pikAttack;
        
        
    }
    
    return false;
 }
  