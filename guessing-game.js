//importing readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//askRange - main function
const askRange = () => {
    rl.question("Enter a max number: ", max => {
        rl.question("Enter a min number: ", min => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();
        });
    });
}
askRange();

//askGuess
const askGuess = () => {
    console.log(`You have ${numAttempts} attempts.`);
    rl.question("Enter a guess: ", (answer) => {
        numAttempts--;
        if (checkGuess(Number(answer))) {
            console.log("You win!");
            rl.close();
        } else if (numAttempts === 0) {
            console.log("You have no more attempts");
            console.log("GAME OVER!");
            rl.close();
        } else {
            askGuess();
        }
    });
};

//global scope
let secretNumber;
//setting variable for number of attempts a player has
let numAttempts = 5;

//random range function in fat arrow form
let randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + (min));
};

//function to check number inputted
let checkGuess = function(num) {
    if (num > secretNumber) {
        console.log("Too high!");
        return false;
    }
    if (num < secretNumber) {
        console.log("Too low!");
        return false;
    }
    if (num === secretNumber) {
        console.log("Correct!");
        return true;
    }
};



/*test 1 checking booleans - passed
console.log(checkGuess(90));
console.log(checkGuess(11));
console.log(checkGuess(77));*/

/*test 2 checking randomInRange - passed
console.log(randomInRange(15, 20)); // 16
console.log(randomInRange(15, 20)); // 17
console.log(randomInRange(15, 20)); // 20*/

//test 3 checking askRange - passed