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

while (enemyHealth > 0 && playerHealth > 0) {
    //Alerts users that they are starting the round
   

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'F' or 'S' to choose.");
         //if the player chooses to skip then stop the loop
        if (promptFight === "s" || promptFight === "S") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you wish to skip this battle?");
            // if yes (true), leave fight
            if (confirmSkip) { 
                window.alert(playerName + ' fled from ' + enemyName + '. ' + playerName + ' dropped 10 credits in their cowardly escape.');
                //subtract playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log(playerName + " credits: ", playerMoney);
                break; 
            }
            //if no (false), run fight again
            else { 
                fight();
            }    
        }
       
        //Subtract the value of playerAttack from enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        //Log resulting message to the console so we know that it worked
        console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has been destroyed!');
            // award player money for winning
             playerMoney = playerMoney + 20;
            //leave while loop since enemy is dead
            break;
        } else { 
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
        //Subtract the value of enemyAttack from playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        //Log resulting message to the console so we know that it worked
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has been destroyed!");
            
            //leave while loop since player is dead
            break;
        } else {
            window.alert( playerName + " still has " + playerHealth + "health left.");
        }
     }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames [i];
    enemyHealth = 50;
    //call fight function with enemy robot
    fight(pickedEnemyName);
}
//fight();