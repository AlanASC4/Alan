var prompt = require('prompt-sync')();
var money = 1000;
var louisVuittonDuffleBag = [];
while(money>100)
{
    var answer = prompt("You can buy yeezys for 400, gucci flip flops for 200, or ray bans for 100 \n");
    if (answer.toLowerCase() == "yeezys" && money >=500)
    {
        money -= 400;

        louisVuittonDuffleBag.push("Yeezy's");
        console.log("You have successfully bought these pair of Yeezy's");
    }
    else if (answer.toLowerCase() == "gucci flip flops" && money >= 300)
    {
        money -= 200;
        louisVuittonDuffleBag.push("Gucci Flip Flops");
        console.log("You have successfuly bought this pair of Gucci Flip Flops");
    }
    else if (answer.toLowerCase() == "ray bans" && money >=200)
    {
        money -= 100;
        louisVuittonDuffleBag.push("Ray Bans");
        console.log("You have successfuly bought this pair of Ray Bans");
    }
    else
    {
        console.log("We do not have that item in stock");
    }
}

console.log("Leave, you're deadass broke my guy!");