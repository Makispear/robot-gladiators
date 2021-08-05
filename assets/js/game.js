var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player chooses to fight: 
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // enemy gains damage 
            enemyHealth = enemyHealth - playerAttack; 
            console.log(
                `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health left.`
            );
        // checking enemy's health 
            if (enemyHealth <= 0) {
                window.alert(`${enemyName} has died!`);
            } else {
                window.alert(`${enemyName} still has ${enemyHealth} health left.`)
            }
        // user gains damage 
            playerHealth = playerHealth - enemyAttack; 
            console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health left.`);
        // checking player's health 
            if (playerHealth <=0) {
                window.alert(`${playerName} has died!`);
            } else {
                window.alert(`${playerName} still has ${playerHealth} health left.`)
            };
        // if player chooses to skip  
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirming player wants to skip 
            var confirmSkip = window.confirm("Are you sure you want to quit?")
        // if yes leave 
            if (confirmSkip) {
                window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        // subtract money form player for skipping 
                playerMoney = playerMoney - 2;
            }
            window.alert(`${playerName} has chosen to skip the fight!`);
        } else {
            window.alert(`You need to choose a valid option. Try again!`)
        };

        // GAME STATES 
        // "WIN" - Player robot has defeated all enemy-robots 
            // *FIght all enemy robots
            // *Defeat each enemy-robot 
        // "LOSE" - Player robot's health is zero or less 
};
// fight();
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyName[i] + " is at " + i + " index");
  }
