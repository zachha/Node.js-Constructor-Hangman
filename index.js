//requiring packages and importing constructors
const Word = require('./word');
const inquirer = require('inquirer');
let start;

let hangman = {
    //array of words for user to guess
    wordBank: ["Panda","Giraffe", "Elephant", "Camel", "Sloth", "Hippopotamus", "Stingray", "Jaguar"],
    //array keeps track of letters user has already used
    alreadyGuessed: [],
    //keeps track of word order in wordbank array
    count: 0,
    //keeps track of letters guessed in word to check win condition
    stringCount: 0,
    newStringCount: 0,
    //keeps track of user guesses left
    guessesLeft: 10,
    //keeps track of letters 
    //randomizes the array for the user every time they play
    randomWord: function() {
        this.wordBank.sort((function(a,b){return 0.5 - Math.random()}))
    },
    //keeps the random order of array words going until the user finishes or stops playing
    gameStart: function() {
        start = new Word(this.wordBank[this.count]);
        console.log(start);
        this.stringCount = 0;
        this.newStringCount = 0;
        this.guessesLeft = 10;
        start.letterPush();
        this.ask();
    },
    // initializes a prompt for user to input letter and congratulates them on correct guesses/winning
    ask: function() {
        inquirer.prompt([
        {
            type: 'input',
            name: 'userLetter',
            message: "Guess a letter!"
        }
    ])
          .then(answers => {
            start.letterGuess(answers.userLetter.toUpperCase());
            console.log(start.displayWord); 
            this.winCondition();
          });
    },
    // checks if a letter has been guessed correctly and runs functions to alert the user if they were correct or incorrect, reruns the ask function to keep the prompt going.
    winCondition: function() {
        for(i=0;i<start.letterArr.length;i++) {
            if(start.letterArr[i] != "_") {
                this.newStringCount ++;
            }
        }
        this.guessConditional();
        this.lossCondition();
    },
    guessConditional: function() {
        if(this.newStringCount > this.stringCount) {
                console.log("\x1b[1;32m\n CORRECT!!\n\x1b[0m", );
            } else {
                this.guessesLeft--;
                console.log("\x1b[1;31m%s\x1b[0m", "\n INCORRECT!!\n\n" + this.guessesLeft + " GUESSES REMAINING\n");
            }
            // THERE'S A BUG IN THESE VARS THAT NEEDS TO BE IRONED OUT
        this.stringCount = this.newStringCount;
    },
    // alerts the user if they run out of guesses 
    lossCondition: function() {
        if (!this.guessesLeft) {
          console.log("\x1b[1;35m%s\x1b[0m", "\nOH NO! YOU RAN OUT OF GUESSES. BETTER LUCK NEXT TIME...\n");
        } else if (this.stringCount === start.letterArr.length) {
          this.count++;
          this.gameEnd();
        } else {
          this.newStringCount = 0;
          this.ask();
        }
    },
    // Congratulates and continues after a correct word, ends game after all words guessed
    gameEnd: function() {
        if(this.count === this.wordBank.length) {
            console.log("\x1b[1;32m\n C\x1b[1;31mO\x1b[1;36mN\x1b[1;33mG\x1b[1;34mR\x1b[1;35mA\x1b[1;36mT\x1b[1;37mU\x1b[1;31mL\x1b[1;32mA\x1b[1;33mT\x1b[1;34mI\x1b[1;35mO\x1b[1;36mN\x1b[1;37mS\x1b[1;31m! \x1b[1;32m! \x1b[1;33m!\x1b[0m");
            console.log("\x1b[1;36m\nWOW! YOU CORRECTLY GUESSED ALL THE WORDS, I'M IMPRESSED!\n\x1b[0m");
        } else {
            console.log("\x1b[1;33m\nCONGRATULATIONS!!! YOU GUESSED THE WORD![0m");
            console.log("\x1b[1;33m\n BUT CAN YOU HANDLE.... ANOTHER WORD ??? \n[0m");
            this.gameStart();
        }
    }
}
// initializes necessary functions and starts games
hangman.randomWord();
hangman.gameStart();
