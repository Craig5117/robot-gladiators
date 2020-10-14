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
while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd liked to fight or run       
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'F' or 'S' to choose.");
        
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "s" || promptFight === "S") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) { 
                window.alert(playerName + ' fled from ' + enemyName + '. ' + playerName + ' dropped 10 credits in their cowardly escape.');
                 // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log(playerName + " credits: ", playerMoney);
                break; 
            }
        }    
              
        //Subtract the value of playerAttack from enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has been destroyed!');

            // award player money for winning
             playerMoney = playerMoney + 20;
             
            // leave while() loop since enemy is dead
            break;
        } else { 
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        //Subtract the value of enemyAttack from playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
        
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has been destroyed!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
     }
};

// fight each enemy robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
         // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName); 
    } 
    // if player isn't alive, stop the game
    else {
        window.alert('You have lost your robot in battle! Game Over!');
    }    
}
//fight();
//if (enemyHealth === 50) {alert(enemyName + " approaches!");}