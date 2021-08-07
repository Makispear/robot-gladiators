        // Random number between min and max values
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
// Player's Name {function}
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt(`What is your robot's name?`)
    }
    console.log(`Your robot's name is ${name}`);
    return name;
};
// Players stats {object}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert(`Refilling players heath by 20 for 7 dollars.`);
            this.health += 20;
            this.money -= 7;
            } else {
                window.alert(`You don't have enough money!`)
            }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
        window.alert(`Upgrading player's attack by 6 for 7 dollars.`);
        this.attack += 6;
        this.money -= 7;
        } else (`You don't have enough money!`)
    }
};
// Enemy stats {array with obj}
var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    //   funcion randomNumber on line 2 
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
];

// Function: to check if player wants to fight or skip 
var FightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer!")
        return FightOrSkip();
    }        
    // If player skips, confirm skip, stop loop
        promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you want to quit?")
        if (confirmSkip) {
            window.alert(`${playerInfo.name} has decided to skip this fight. Goodbye!`); 
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
};

// This is the fighting logic in one function
var fight = function(enemy) {
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    // repeat and execute as long as the enemy-robot is alive 
    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            if (FightOrSkip()) {
                break;
            }
        
               // ROUND STARTS
                    // PLAYERS TURN TO ATTACK 
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
            `${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health left.`
            );
            // Enemy status 
            if (enemy.health <= 0) {
                window.alert(`${enemy.name} has died!`);
                playerInfo.money = playerInfo.money + 20;
                break;
                } else {
                    window.alert(`${enemy.name} still has ${enemy.health} health left.`)
                }
        } else {
               // ROUND STARTS
                    // Enemy attacks First 
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
            `${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health left.`
            );
            // Player status 
            if (playerInfo.health <= 0) {
                window.alert(`${playerInfo.name} has died!`);
                break;
                } else {
                    window.alert(`${playerInfo.name} still has ${playerInfo.health} health left.`)
                }
        }
            isPlayerTurn = !isPlayerTurn;
    }
};

// Shop feature to get more health, upgrade your attack or refill your health
var shop = function() {
    var shopOptionPrompt = window.prompt(`Would you like to "REFILL" health, "UPGRADE" attack, or "LEAVE" store? Type 1:(refill), 2:(upgrade) or 3:(leave).`);
    // debugger;
    parseInt(shopOptionPrompt);
    switch(shopOptionPrompt) {
        // functions inside array: line 16
        case "1":
            playerInfo.refillHealth(); 
            break;
        case "2":
            playerInfo.upgradeAttack();
            break;
        case "3":
            window.alert("Leaving store.");
            break;
        default:
            window.alert("You didn't pick a valid option. Try again.");
            shop();
            break;
    }
};

// NEW GAME 
var startGame = function() {
    // debugger;
                // reset player stats 
    playerInfo.reset()
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert(`Welcome To Robot Gladiators! Round (${i + 1})`);
            // debugger;
            var pickedEnemyObj  = enemyInfo[i];
                // Reset enemy health 
            pickedEnemyObj.health = randomNumber(40, 60);
            // debugger;
                // FIGHT 
            fight(pickedEnemyObj);
            // if we aren't at last enemy 
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            };
        } else {
        window.alert(`You have lost your robot in battle! Game over!`);
        break;
        };
    };
    endGame()
};

// END GAME: after game ends this function will execute 
var endGame = function() {
    // if player is alive they win 
    if (playerInfo.health > 0) {
        window.alert(`Great job, you've survived the game! You now have a score of ${playerInfo.attack}.`)
        } else {
            window.alert("You've lost your robot in battle")
        };
        // ask player if they want to play again 
    var playAgainConfirm = window.confirm("would you like to play again?");

    if (playAgainConfirm) {
        // restart 
        startGame()
        } else {
        window.alert("Thank you for playing Root GLadiators! come back soon!");
        };

    }


// THIS EXECUTES THE GAME: COMMENT OUT TO STOP
            startGame();

