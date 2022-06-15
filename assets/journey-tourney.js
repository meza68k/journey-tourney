var playerName = window.prompt("What is your players name?");
var playerHealth = 100;
var playerAttack = 10;
var playerGold = 20;

//logging multiple values like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

function penalty(){

};
var skippingPen = -1;

//explaining the game a bit
function gameIntro() {
    window.alert("The journey Tourney will consists of many battles, choose your gear and opponents wisely. as you get stronger your enemys will as well so be prepared. Fight or pay to win, however you choose goodluck.")

};
//displays players stats
function displayPlayer() {
    window.alert(playerName+ " currently has "+ playerHealth+" HP, " + playerAttack + " AP, and "+playerGold+" Gold");
    console.log(playerName+ " currently has "+ playerHealth+" HP "+ playerAttack + " AP, and "+playerGold+" Gold");
};
//displays enemys stats
function displayOpp() {
    window.alert(enemyName+ " currently has "+ enemyHealth+" HP, and " + enemyAttack + "AP.");
    console.log(enemyName+ " currently has "+ enemyHealth+" HP, and " + enemyAttack + "AP.");
};
//gives description of the round
function displayRnd() {
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has "+ enemyHealth+ " hp remaining." );
    window.alert( playerName + " attacked " + enemyName + ". " + enemyName + " now has "+ enemyHealth+ " hp remaining." );
    window.alert( enemyName + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth+ " hp remaining." );
};
//introudction
function introudction(){
    window.alert("Welcome to the Journey Tourney! " + playerName);
    gameIntro();
    window.confirm("Are you ready to fight?"); 
};
introudction();
//player selection of fight
function promptInitFight() {
   // newOpp();
    displayPlayer();
    window.alert("Your opponent will be "+enemyName+", a middle aged blender with rusty blades. With a total of "+enemyHealth+" HP, and "+enemyAttack+" AP.")
    playerSelect = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 
    if (playerSelect === "FIGHT" || "fight") {
        window.alert("you have chosen to "+ playerSelect)
        enemyHealth = (enemyHealth-playerAttack);
        playerHealth = (playerHealth-enemyAttack);
        displayRnd();
        if (playerHealth <= 0 ) { 
            Window.alert(playerName+" Got his ass whooped by "+ enemyName)
        } 
        else if (enemyHealth <= 0 ) {
            window.alert(enemyName+" has been busted!")
            playergold = (playerGold + 5)
        } 
        else (enemyHealth && playerHealth >= 0);
            fightAgain();
    
        
    }else if (playerSelect === "SKIP" || "skip") {
        window.alert("you have chosen to "+ playerSelect)
        var confirmSkip = window.prompt("Are You sure You want to skip?");
        if (confirmSkip) {
           windows.alert(playerName+" Has lost 5 gold for being scared.");
           playerGold = (playerGold - skippingPen);
       // newOpp();
        }
        else  {
            promptInitFight();
        }

    }else {
        window.alert("Not asking again, fight or flight?")
    }
};

function fightAgain() {
    window.prompt("Would you like to FIGHT again or Skip? Enter 'FIGHT' or 'SKIP' to choose.");
    playerSelect = window.prompt;
    if (playerSelect === "FIGHT" || "fight"){
        enemyHealth = (enemyHealth-playerAttack);
        playerHealth = (playerHealth-enemyAttack);
        if (playerHealth <= 0 ) { 
            Window.alert(playerName+" Got his ass whooped by "+ enemyName)
        } else if (enemyHealth <= 0 ) {
            window.alert(enemyName+" has been busted!")
        } else  {
            displayRnd();
            fightAgain();
        };
        
    }else if (playerSelect === "SKIP" || "skip") {
        window.alert("you have chosen to "+ playerSelect)
        windows.alert(playerName+" Has lost 5 gold for being scared.");
        playerGold = (playerGold - skippingPen);
    
        }else {
        window.alert("Not asking again, fight or flight?")
    }
}
promptInitFight(); 
