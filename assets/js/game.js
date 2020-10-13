//Game States
//"WIN" Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robots
//"LOSE" Player robot's health is 0 or less 

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Megatron", "Starscream", "Devastator"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    //Alerts users that they are starting the round
    window.alert("Welcome to Robot Gladiators!")

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'F' or 'S' to choose.");
    //if the player chooses to fight
if (promptFight === "f" || promptFight === "F") { 
    //Subtract the value of playerAttack from enemyHealth and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    //Log resulting message to the console so we know that it worked
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has been destroyed!");
    }

    else { 
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of enemyAttack from playerHealth and use that result to update the value in the playerHealth variable
    playerHealth = playerHealth - enemyAttack;
    //Log resulting message to the console so we know that it worked
    console.log(
    enemyName + " mauled " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has been destroyed!");
    }

    else {
        window.alert( playerName + " still has " + playerHealth + "health left.");
    }
    }
    //if the player chooses to skip
else if (promptFight === "s" || promptFight === "S") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you wish to skip this battle?");
    // if yes (true), leave fight
    if (confirmSkip) { 
        window.alert(playerName + " fled from " + enemyName + playerName + " dropped 2 credits in their cowardly escape.");
        playerMoney = playerMoney - 2; 
    }
    //if no (false), run fight again
    else { 
        fight();
    } 
    //if the player enters invalid option
} else {
    window.alert("Does not compute. Please try again.");
}
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
//fight();