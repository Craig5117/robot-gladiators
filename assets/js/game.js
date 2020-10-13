var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    //Alerts users that they are starting the round
    window.alert("Welcome to Robot Gladiators!")


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

};

fight();