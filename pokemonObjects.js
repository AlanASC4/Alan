function Pokemon(name,type,hp,attack,defense,legendary)
{
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.legendary = legendary;

    this.printPoke = function() 
    {
        console.log(name + " Stats:");
        console.log("Type(s): " + type);
        console.log("HP: " + hp);
        console.log("Attack: " + attack);
        console.log("Defense: " + defense);
        console.log("Legendary(True/False): "+ legendary);
    }

}

var metapod = new Pokemon("Metapod","Bug",50,20,55,false);
var dugTrio = new Pokemon("Dugtrio","Ground",35,80,50,false);
var zapDos = new Pokemon("Zapdos","Electric, Flying",90,90,85,true);
var shiftry = new Pokemon("Shiftry","Grass, Dark",90,100,60,false);
var pignite = new Pokemon("Pignite","Fire, Fighting",90,93,55,false);
var jellicent = new Pokemon("Jellicent","Water, Ghost",100,60,70,false);

var myRoster = [metapod,dugTrio,zapDos,shiftry,pignite,jellicent];
function printRoster()
{
    for(var i=0;i<myRoster.length;i++)
    {
       console.log(myRoster[i].printPoke());
       console.log("-=+-=+-=+-=+=-+=-+=-+=-");
    }
}
printRoster();
console.log();

function pokemonAttacked(myRoster)
{
    for(var i = 0; i<myRoster.length; i++)
    {
        myRoster[i].hp = myRoster[i].hp - 10;
    }
}
pokemonAttacked(myRoster);
console.log("All your Pokemon have lost 10 HP!\n");
printRoster();