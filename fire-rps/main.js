<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

   <title>RPS Game</title>

   <!--jquery-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

   <!--google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Alike+Angular|Asul|Eczar" rel="stylesheet">

   <!--custom files-->
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css">

</head>
<body>

   <!--Add your name-->
    <h1>Play this shit Homie</h1>

   <!--Will be populated with messages-->
    <div class="allMessages">
        
   </div>
    
   <form action="" method="get">
<button name="rock">Rock</button>
<button name="rock">Paper</button>
<button name="rock">Scissors</button>
</form>

   <!--For user to input messages-->
    <div class="userContainer">
        <form>
            <div class="textContainer">
                <div>
                    <p>Your Initials:</p><input id="name" type="text">
                </div>
                <div>
                    <p>Choice(r,p,s):</p><input id="message" type="text">
                </div>
            </div>
            <div class="GObutton">
                <input type="reset" onclick="updateDB();" value="Submit/Update">
            </div>
        </form>
    </div>
</body>
</html>