// Players stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// Enemy stats 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
        // Random number between min and max values
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while (enemyHealth > 0 && playerHealth > 0) {

                    // ROUND STARTS
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

                    // IF PLAYER SKIPS CONFIRM  
            if (promptFight === "skip" || promptFight === "SKIP") {
                var confirmSkip = window.confirm("Are you sure you want to quit?")
                if (confirmSkip) {
                    window.alert(`${playerName} has decided to skip this fight. Goodbye!`); 
                    playerMoney = Math.max(0, playerMoney - 10);
                    console.log(`Player's money: ${playerMoney}`);
                    break;
                }
            };

                    // PLAYERS TURN TO ATTACK 
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(
            `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health left.`
            );
            // Enemy status 
            if (enemyHealth <= 0) {
                window.alert(`${enemyName} has died!`);
                playerMoney = playerMoney + 20;
                break;
                } else {
                    window.alert(`${enemyName} still has ${enemyHealth} health left.`)
                }

                    // ENEMY'S TURN 
            var damage = randomNumber(enemyAttack -3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
            console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health left.`);
            // Player's status 
            if (playerHealth <= 0) {
                window.alert(`${playerName} has died!`);
                break;
                } else {
                    window.alert(`${playerName} still has ${playerHealth} health left.`)
                }
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch(shopOptionPrompt) {
        case "REFILL": //
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.")
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("you don't have enough money!");
            };
            break;
        case "UPGRADE": //
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("you don't have enough money!");
            };
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
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert(`Welcome To Robot Gladiators! Round (${i + 1})`);
            var pickedEnemyName  = enemyNames[i];
                // Reset enemy health 
            enemyHealth = randomNumber(40, 60);
            // debugger;
                // FIGHT 
            fight(pickedEnemyName);
            // if we aren't at last enemy 
            if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert(`Great job, you've survived the game! You now have a score of ${playerMoney}.`)
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

