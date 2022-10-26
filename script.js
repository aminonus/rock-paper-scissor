//Setting up Variables
let scorePlayer = 0;
let scoreComputer = 0;
let numberRounds;

//Main Sequence of the game
setNumberRounds();









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
