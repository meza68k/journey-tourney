// var playerName = window.prompt("What is your players name?");
var playerHealth = 100;
var playerAttack = 10;
var playerGold = 20;

//logging multiple values like this 
console.log(playerName, playerAttack, playerHealth);
//array of enemies
var enemyNames = ["bender", "will smith","mrSteelyotoe", "joemama."];
var enemyHealth = 50;
var enemyAttack = 12;

function penalty(){

};
//the cost to skip
var skippingPen = 5;

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
    window.alert(enemyNames[i]+ " currently has "+ enemyHealth+" HP, and " + enemyAttack + "AP.");
    console.log(enemyNames[i]+ " currently has "+ enemyHealth+" HP, and " + enemyAttack + "AP.");
};
//gives description of the round
function displayRnd() {
    console.log(
    playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has "+ enemyHealth+ " hp remaining." );
    window.alert( playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has "+ enemyHealth+ " hp remaining." );
    window.alert( enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth+ " hp remaining." );
    console.log( enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth+ " hp remaining." );
};
//introudction
function introudction(){
    var playerName = window.prompt("What is your players name?");
    window.alert("Welcome to the Journey Tourney! " + playerName);
    gameIntro();
    window.confirm("Are you ready to fight?"); 
};
introudction();
//Displays enemy now has
function nowOppHas(){
    window.alert(enemyNames[i]+" now has "+enemyHealth+" HP");
};
//displays playernow
function playerNowhas(){
    window.alert(playerNames[i]+" now has "+ enemyHealth+" HP");
};
//dislpays player gold
function nowGold() {
    window.alert(playerName+" Now has "+playerGold+" gold.");
    console.log(playerName+" Now has "+playerGold+" gold.");
};
//used to restart the for loop without messing up the rounds because of an error
var cancelI = 0

//
function fight(enemyName) {
    enemyHealth = 50;
    displayPlayer();
    displayOpp();
    var playerSel = window.prompt("welcome to round "+ (i+1)+"! Would you like to take on "+ enemyName+"? or skip for 5 gold.");
    if (playerSel === "fight" || playerSel === "FIGHT") {
        while(enemyHealth > 0 && playerHealth > 0 ){
        playerHealth = playerHealth-enemyAttack;
        enemyHealth = enemyHealth-playerAttack;
        displayRnd();
        };
        if (playerHealth <= 0){
            window.alert("You just got taken out by "+enemyName+". refresh to retry");
            exit;
        };
        if (enemyHealth <= 0) {
            window.alert(enemyAttack+" has been taken out of the Tourney.");
            playerGold = playerGold + 5;
            
        };

    } else if (playerSel === "skip" || playerSel === "SKIP") {
        var skipConfirm = window.confirm("Are You sure you want to skip 5 gold will be deducted");
        if (skipConfirm = true && playerGold >= 5){
        playerGold = playerGold-skippingPen;
        nowGold(); 
        debugger;
        };
        if (skipConfirm = true && playerGold < 5){
            windows.alert("Yeah your gold card declined dawg, you finna have throw them hands on this one.");
        };
    } else if (playerSel === "EXIT" || playerSel === "exit"){
        exit;
    }else {
        window.alert("not asking again. Fight or flight?");
        cancelI = cancelI - 1;
        debugger;
    };
};

for(var i = 0 ;i < enemyNames.length; i = i+1+cancelI) {
     //debugger;
    fight(enemyNames[i]);
};

window.alert("congratulations on Winning the journey Tourney "+ playerName+"!");

// for(var i = 0;i < enemyNames.length; i++) {
//     fight(enemyNames[i]);
// };