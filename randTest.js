var artists = ["Tupac","Futur","PnB Rock","Rihanna","Drake",
"Migos","Travis Scott","BigSean","Lil Uzi Vert","Kendrick",
"Playboi Carti","New Edition","Chance","21 Savage","Gucci Mane"];
function randArtists()
{console.log(artists[Math.round(Math.random() * artists.length - 1)]);}

for (var i = 0; i < 5; i++)
{randArtists();}