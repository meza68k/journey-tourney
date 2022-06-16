//intro
var playerName = window.prompt("Welcome to the Journey Tourney. What will your name be?");
 gameIntro();
 window.confirm("Hello "+playerName+" are you ready to fight?"); 
// var playerName = window.prompt("What is your players name?");
var playerHealth = 100;
var playerAttack = 10;
var playerGold = 20;

//logging multiple values like this 
//console.log(playerName, playerAttack, playerHealth);
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
function displayOpp(i) {
    window.alert(enemyNames[i]+ " currently has "+ enemyHealth+" HP, and " + enemyAttack + "AP.");
    console.log(enemyNames[i]+ " currently has "+ enemyHealth+" HP, and " + enemyAttack + "AP.");
};
//gives description of the round
function displayRnd(i) {
    console.log(
    playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has "+ enemyHealth+ " hp remaining." );
    window.alert( playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has "+ enemyHealth+ " hp remaining." );
    window.alert( enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth+ " hp remaining." );
    console.log( enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth+ " hp remaining." );
};
//introudction
// function introudction(){
//     var playerName = window.prompt("Welcome to the Journey Tourney. What will your name be?");
//     gameIntro();
//     window.confirm("Hello "+playerName+" are you ready to fight?"); 
// };

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
//items
var refillHp = function() {
    playerHealth = 100
    playerGold = playerGold - 10;

};
var upgradeAp = function() {
    playerAttack = playerAttack + 5;
    playerGold = playerGold - 5;

};
//the shop
function shop(roundNum) {
    var shopSel = window.prompt("Congratulations on making it to round "+(roundNum)+". Would you like to visit the shop Now?");
    if (shopSel === "yes" || shopSel === "YES") {
        window.alert("Welcome to the shop, please enter health , upgrade , or enter exit to exit the shop at anymoment.")
        var itemSel = window.prompt("health costs 10gs, and upgrading your AP costs 5gs. ")
        switch(itemSel){
            case "health":refillHp() ;break;
            case "upgrade":upgradeAp(); break;
            case "exit": 
            };
    }else if (shopSel === "no" || shopSel === "NO"){
    }else {};

 };
//
function fight(enemyName, i) {
    enemyHealth = 50;
    debugger;
    var roundNum = (i+1)
    if (i >= 1){
        shop(roundNum);
    };
    displayPlayer(i);
    displayOpp(i);
    var playerSel = window.prompt("welcome to round "+roundNum+"! Would you like to take on "+ enemyName+"? or skip for 5 gold.");
    if (playerSel === "fight" || playerSel === "FIGHT") {
        while(enemyHealth > 0 && playerHealth > 0 ){
        playerHealth = playerHealth-enemyAttack;
        enemyHealth = enemyHealth-playerAttack;
        displayRnd(i);
        };
        if (playerHealth <= 0){
            window.alert("You just got taken out by "+enemyName+". refresh to retry");
            exit;
        };
        if (enemyHealth <= 0) {
            window.alert(enemyName+" has been taken out of the Tourney.");
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

function startGame(){
    for(var i = 0 ;i < enemyNames.length; i = i+1+cancelI) {
        //debugger;
       fight(enemyNames[i],i);
   };
};
// for(var i = 0 ;i < enemyNames.length; i = i+1+cancelI) {
//      //debugger;
//     fight(enemyNames[i]);
// };
startGame()
function endGame() {
    window.alert("congratulations on Winning the journey Tourney "+ playerName+"!");
    var tryAg = window.confirm("would you like to try again?");
    if (tryAg) {
        gameIntro();
        startGame();
    }
    else {
        window.alert("Have a good day")
        exit;
    };
};
endGame();

// for(var i = 0;i < enemyNames.length; i++) {
//     fight(enemyNames[i]);
// };