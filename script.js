//Setting up Variables
let scorePlayer = 0;
let scoreComputer = 0;
let numberRounds;
let playerChoice;
let pcChoice;

//Main Sequence of the game
setNumberRounds();
 for (let i=1; i<= numberRounds; i++){
    console.log(`Round number: ${i}`);
    checkPlayerChoice();
    console.log(`You chose: ${playerChoice}`);
    checkPcChoice();
    console.log(`PC chose: ${pcChoice}`);
    checkResults(playerChoice, pcChoice);
 }



//Set Round Number
function setNumberRounds() {

    numberRounds = prompt(`How many rounds? (1-5)`);
    if (!isNaN(numberRounds) && numberRounds <= 5 && numberRounds >= 1){
        console.log(`Number of rounds is: ${numberRounds}`);
        return numberRounds;
    } else {
        console.log(`Please choose a number between 1 and 5`);
        setNumberRounds();
    }

}

//Check the player choice if it is valid
function checkPlayerChoice(){
    let choice = prompt(`Please choose [Rock] [Paper] [Scissor]`)
    toString(choice);
    let choiceTrim = choice.trim();
    let choiceUP = choiceTrim.toUpperCase();
    if ((choiceUP === "ROCK") || (choiceUP === "PAPER") || (choiceUP === "SCISSOR")){
        let choiceLoPart = choiceUP.slice(1);
        let choiceLO = choiceLoPart.toLowerCase();
        let choiceDisplay = choiceUP[0]+choiceLO;
        playerChoice = choiceDisplay;
        return playerChoice;
    }
    else {
        checkPlayerChoice();
    }
}

//Randomize the PC choice
function checkPcChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let choiceRandom = Math.floor(Math.random() * 3);
    pcChoice = choices[choiceRandom];
    return pcChoice;
}

//Check the results
function checkResults(player, pc){
    
}