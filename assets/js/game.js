//Game States
//"WIN" Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robots
//"LOSE" Player robot's health is 0 or less 

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};


var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if (this.money > 7) {
            window.alert("Refilling " + playerInfo.name +"'s health by 25 for 7 credits.")
            this.health += 25;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough credits!");
        }
    },
    upgradeAttack: function() {
        if (this.money > 7) {
            window.alert("Upgrading " + playerInfo.name +"'s attack by 9 for 7 credits.")
            this.attack += 9;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough credits!");
        }
    }
};

var enemyInfo = [
    {
        name: "Starscream",
        attack: randomNumber(10, 13) 
    },
    {
        name: "Megatron",
        attack: 14
    },
    {
        name: "Devastator",
        attack: randomNumber(12, 16)
    }
];

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
   
  
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // convert promptFight to all lowercase so we can check with less options
    promptFight = promptFight.toLowerCase();
  
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "s") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert('Player fled from battle and recieved a credits penalty.');
            // subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log(playerInfo.name + " credits: ", playerInfo.money);
            return true;
        }
    }
    return false
}

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd liked to fight or run       
        if (fightOrSkip()) {
            break;
        }
                
        //Subtract the value of playerInfo.attack from enemy.health and use that result to update the value in the enemy.health variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. Damage: ' + damage + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has been destroyed!');

            // award player money for winning
                playerInfo.money = playerInfo.money + 20;
                console.log(playerInfo.name + " recieved 20 credits for winning. " + playerInfo.name +" now has " + playerInfo.money + " credits.");
                
            // leave while() loop since enemy is dead
            break;
        } else { 
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        //Subtract the value of enemy.attack from playerInfo.health and use that result to update the value in the playerInfo.health variable
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. Damage: ' + damage + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );
        
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has been destroyed!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};

// function to start a new game
var startGame = function() {
    // debugger
    // reset player stats
   playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            // debugger
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;

            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj); 
        } 
        // if were not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("Would you like to visit the shop before your next round?");
                // if yes, take them to the store() function
                if (storeConfirm) {
                shop();
                }
            }

        // if player is not alive, break out of the loop and let endGame function run
         else {
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " credits.");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
     // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one of the following: Enter '1' for REFILL, Enter '2' for UPGRADE, Enter '3' to leave without purchasing.");
    // use switch to carry out action
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1: 
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert(playerInfo.name + " left the shop.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
// start the game when the page loads
startGame();
//fight();
//if (enemy.health === 50) {alert(enemy.name + " approaches!");}