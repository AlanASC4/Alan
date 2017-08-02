


$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      //capitalize first letter

        function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);    
        }
        
        
    //console.log(data);
        var person = data.results[0];
        var personGender = person.gender;
        var personTitle = capitalizeFirstLetter(person.name.title);
        var personFirstName = capitalizeFirstLetter(person.name.first);
        var personLastName = capitalizeFirstLetter(person.name.last);
        var male = "male";
        var female = "female";
        var posessPronoun = "";
        var pronoun
        var personCity = capitalizeFirstLetter(person.location.city);
        var personState = capitalizeFirstLetter(person.location.state);
        var personPicture = person.picture.large;
        var personCountry = person.nat;
        
        //gender check
        function checkGender(){
            if (personGender == male)
            {posessPronoun = "his";
            pronoun = "he";}
            else if(personGender == female)
            {posessPronoun = "her";
            pronoun = "she";}
        }
        checkGender();
        $("body").append("<h1>This is " + personTitle + ". " + personFirstName + 
        " " + personLastName + ", " + posessPronoun + " gender is " + personGender +". " + 
        personFirstName + " lives in " + personCity + ", " + personState + ". This is what " + pronoun + " looks like: " + " </h1>");
        $("body").append("<img src =  ' " + personPicture + " ' >");
$.ajax({
    url: 'https://restcountries.eu/rest/v2/all/',
    dataType: 'json',
    success: function(data){
        for(i=0; i<data.length; i++){
            if (personCountry == data[i].alpha2Code){
                $('body').append("<h2>" + capitalizeFirstLetter(pronoun) + " oiginates from " + data[i].name + ". <h2>");
                break
            }
        }
    }
})

  }
});
      