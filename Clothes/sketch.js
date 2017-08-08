//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
   window.location.href = "mainPage.html";
    
}

//called when "sign out" button clicked
function onSignOut() {
    console.log(gapi.auth2);
    gapi.auth2.init();
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
        
    });
}

  var images = [ 'http://lorempixel.com/400/200/sports/1', 'http://lorempixel.com/400/200/sports/2','http://lorempixel.com/400/200/sports/3','http://lorempixel.com/400/200/sports/4' ];
    var index = 0;

    function buildImage() {
      var img = document.createElement('img')
      img.src = images[index];
      document.getElementById('content').appendChild(img);
    }

    function changeImage(){
      var img = document.getElementById('content').getElementsByTagName('img')[0]
      index++;
      index = index % 4; // This is for if this is the last image then goto first image I have 4 images so I've given 4 change accordingly 
      img.src = images[index];
    }