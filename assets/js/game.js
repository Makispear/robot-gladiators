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

    console.log(`Your robot's name is ${name}`)
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


var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive 
    while (enemy.health > 0 && playerInfo.health > 0) {

                    // ROUND STARTS
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

                    // IF PLAYER SKIPS CONFIRM  
            if (promptFight === "skip" || promptFight === "SKIP") {
                var confirmSkip = window.confirm("Are you sure you want to quit?")
                if (confirmSkip) {
                    window.alert(`${playerInfo.name} has decided to skip this fight. Goodbye!`); 
                    playerInfo.attack = Math.max(0, playerInfo.attack - 10);
                    console.log(`Player's money: ${playerInfo.attack}`);
                    break;
                }
            };

                    // PLAYERS TURN TO ATTACK 
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
            `${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health left.`
            );
            // Enemy status 
            if (enemy.health <= 0) {
                window.alert(`${enemy.name} has died!`);
                playerInfo.attack = playerInfo.attack + 20;
                break;
                } else {
                    window.alert(`${enemy.name} still has ${enemy.health} health left.`)
                }

                    // ENEMY'S TURN 
            var damage = randomNumber(enemy.attack -3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health left.`);
            // Player's status 
            if (playerInfo.health <= 0) {
                window.alert(`${playerInfo.name} has died!`);
                break;
                } else {
                    window.alert(`${playerInfo.name} still has ${playerInfo.health} health left.`)
                }
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(`Would you like to "REFILL" health, "UPGRADE" attack, or "LEAVE" store? Type refill, upgrade or leave.`);
    switch(shopOptionPrompt) {
        case "REFILL": //
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE": //
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE": //
        case "leave":
            window.alert("Leaving store.");
            break;
        default:
            window.alert("You didn't pick a valid option. Try again.");
            shop();
            break;
    }
};

        // function to start a new game 
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

startGame();

