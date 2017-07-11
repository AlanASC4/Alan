var myPokemonRoster = ["Abra","Wurmple","Deerling","Igglybuff","Horsea"]
var firstToStrike = myPokemonRoster[0];
var secondToStrike = myPokemonRoster[1];
if(for(var i = 0; i < myPokemonRoster.length; i ++)
    {console.log(myPokemonRoster[i]);}
console.log("My first Pokemon to fight will be " + firstToStrike);
console.log("My second Pokemon to fight will be " + secondToStrike);
console.log(myPokemonRoster.length);
myPokemonRoster.pop();
myPokemonRoster.push("Rayquaza");
myPokemonRoster.push("Archeus");
for(var i = 0; i < myPokemonRoster.length; i ++)
    {console.log(myPokemonRoster[i]);}
console.log(myPokemonRoster.length);
