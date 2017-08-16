var database = firebase.database().ref();
var ref = firebase.database().ref('users');
var refuser;
var locations = [];
database.on("child_added", function(rowData){
    var user = firebase.auth().currentUser;
    var email = user.email;
    var specificKey;
    
   var users = rowData.val();
    var keys = Object.keys(users);
   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( email == users[k].email){
                specificKey = k;
                }
            }
    refuser = users[specificKey];
    console.log(refuser);
    // console.log('this',specificKey);
    // alert(1);
    // var row = rowData.val();
    // var name = row.NAME;
    // var message = row.MESSAGE;
    // var fullText = "<p>" + name + " : " + message + "</p>";
    // $(".allMessages").append(fullText);
    // console.log(rowData);
    // console.log(rowData.val());
    if (rowData.val()[specificKey].ping == undefined){
        console.log('theres nothing you dummy');
    }
    else {
        var values = Object.values(rowData.val()[specificKey].ping);
        for (v = 0; v < values.length; v++){
            locations.push(values[v]);
        }
        console.log('locations',locations);
        //would refuser.ping work just the same?
        console.log (rowData.val()[specificKey].ping);
    }
    // console.log('p',locations);
});
function pop(){
    console.log(refuser)
}
function displayInfo(){
    findName();
    findPing();
}
function errData(err){
    console.log('Error!');
    console.log(err);
}
//finds name/nickname and displays it
function findName(){
    ref.on('value', findName2, errData)
}
function findName2(data){
    var user = firebase.auth().currentUser;
    var userid = user.uid;
    var specificKey;
   var users = data.val();
//    console.log(users);
    var keys = Object.keys(users);
   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( userid == users[k].uid){
                specificKey = k;
                }
            }
    var userData = users[specificKey];
    // $(".container").append("<p>" + userData.name  +"</p>")
}
//finds recent pings and displays it 
function findPing(){
    ref.on('value', findPing2, errData)
}
function findPing2(data){
    var user = firebase.auth().currentUser;
    var userid = user.uid;
    var specificKey;
   var users = data.val();
//    console.log(users);
    var keys = Object.keys(users);
   for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( userid == users[k].uid){
                specificKey = k;
                }
            }
    var userData = users[specificKey];
    var values = Object.keys(userData.ping);
    console.log('values',values);
    for (v = 0; v < values.length; v++){
                $(".container").append("<div class='jumbotron'> <h2> Title:" + userData.ping[values[v]].Title  + 
                "</h2><br><p>Lat:" + userData.ping[values[v]].Lat  + "<br>Long:" + 
                userData.ping[values[v]].Long +"<br>Desc:" + userData.ping[values[v]].Desc  
                + "<br><hr><p>Pinged by: " + userData.name + "</p>");
                
            
                // $(".container").append("<p> Lat:" + userData.ping[values[v]].Lat  +"</p>");
            
                // $(".container").append("<p> Long:" + userData.ping[values[v]].Long  +"</p>");
                
                // $(".container").append("<p> Desc:" + userData.ping[values[v]].Desc  +"</p>");
                $(".container").append("<p> </p>")
            
        
    }
}