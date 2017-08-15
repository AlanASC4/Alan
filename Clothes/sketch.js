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

  var shirts = ['http://www.mrbluewhiter.com/wp-content/uploads/2013/12/flannel-shirt-blue.jpg', 
  'https://img1.etsystatic.com/157/1/11311075/il_340x270.1134504033_o1z8.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/12/49/58/124958064912b264745c7e87eb947095--tie-dye-shirts-designs-tie-die-shirts-diy.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/2c/9c/1d/2c9c1d8b24066e63237700efd08eec8d--light-blue-shirts-green-t-shirts.jpg',
  'https://www.thesouledstore.com/public/theSoul/uploads/catalog/product/20151124182046-1.jpg'];
  var pants = ['http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw63dd8968/images/hi-res/21970_DFTG.jpg?sw=750&sh=750&sm=fit&sfrm=png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCv9ttZX8LzU9Tc3dYOwfill-fjtaNZyDSajwJvYD1fZM9wxi',
  'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Free-World-Remy-Tobacco-Jogger-Pants-_267766-front.jpg',
  'http://images.eastbay.com/pi/BS3693/large/adidas-tiro-17-pants-mens',
  'https://dfp2hfrf3mn0u.cloudfront.net/242/2429270364_145985_png_overview_6.png'];
  var shoes = ['http://static.highsnobiety.com/wp-content/uploads/2016/06/23091457/best-30-sneakers-2016-so-far-11.jpg',
  'http://static.highsnobiety.com/wp-content/uploads/2016/06/23091457/best-30-sneakers-2016-so-far-11.jpg',
  'http://valetmag.com/gr/daily/style/how_tos/how_to_weatherproof_sneakers_092016/art-lead.jpg',
  'http://static.highsnobiety.com/wp-content/uploads/2017/02/06100308/best-sneakers-2017-yeezy-boost-350-v2-01.jpg',
  'http://media.vocativ.com/photos/2015/01/Big-Money-Sneakers-042945646609.jpg']
    

    function randImage() {
        var randShirts = Math.round(Math.random() * (shirts.length - 1));
     $("body").append("<li><img src='" + shirts[randShirts] + "' width='320' height='260'/>");
        var randPants = Math.round(Math.random() * (pants.length -1));
     $("body").append("<li><img src='" + pants[randPants] + "' width='320' height='260'/>");
        var randShoes = Math.round(Math.random() * (shoes.length - 1));
     $("body").append("<li><img src='" + shoes[randShoes] + "' width='200' height='220'/>");
    }
function randCasual() {
        var randShirts = Math.round(Math.random() * (shirts.length - 1));
     $("#Casual").append("<li><img src='" + shirts[randShirts] + "' width='320' height='260'/>");
        var randPants = Math.round(Math.random() * (pants.length -1));
     $("#Casual").append("<li><img src='" + pants[randPants] + "' width='320' height='260'/>");
        var randShoes = Math.round(Math.random() * (shoes.length - 1));
     $("#Casual").append("<li><img src='" + shoes[randShoes] + "' width='200' height='220'/>");
    }
   function randProffesional() {
        var randShirts = Math.round(Math.random() * (shirts.length - 1));
     $("#Professional").append("<li><img src='" + shirts[randShirts] + "' width='320' height='260'/>");
        var randPants = Math.round(Math.random() * (pants.length -1));
     $("#Proffesional").append("<li><img src='" + pants[randPants] + "' width='320' height='260'/>");
        var randShoes = Math.round(Math.random() * (shoes.length - 1));
     $("#Proffesional").append("<li><img src='" + shoes[randShoes] + "' width='200' height='220'/>");
    }
    function randSport() {
        var randShirts = Math.round(Math.random() * (shirts.length - 1));
     $("#Sportive").append("<li><img src='" + shirts[randShirts] + "' width='320' height='260'/>");
        var randPants = Math.round(Math.random() * (pants.length -1));
     $("#Sportive").append("<li><img src='" + pants[randPants] + "' width='320' height='260'/>");
        var randShoes = Math.round(Math.random() * (shoes.length - 1));
     $("#Sportive").append("<li><img src='" + shoes[randShoes] + "' width='200' height='220'/>");
    }