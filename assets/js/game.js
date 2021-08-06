// Players stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// Enemy stats 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



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
                    playerMoney = playerMoney - 10;
                    console.log(`Player's money: ${playerMoney}`);
                    break;
                }
            };

                    // PLAYERS TURN TO ATTACK 
            enemyHealth = enemyHealth - playerAttack; 
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
            playerHealth = playerHealth - enemyAttack; 
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
            enemyHealth = 50;
            // debugger;
                // FIGHT 
            fight(pickedEnemyName);
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



                                            

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyName[i] + " is at " + i + " index");}
                                    
