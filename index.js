//requiring packages and importing constructors
const Word = require('./word');
const inquirer = require('inquirer');
let start;

let hangman = {
    //array of words for user to guess
    wordBank: ["Giraffe", "Elephant", "Camel", "Sloth"],
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
            start.letterGuess(answers.userLetter);
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
        if(this.stringCount === start.letterArr.length) {
            this.count ++;
            this.gameEnd();
        } else {
            this.newStringCount = 0;
            this.ask();  
        }
    },
    guessConditional: function() {
        if(this.newStringCount > this.stringCount) {
                console.log("\x1b[1;32m%s\x1b[0m", "\n CORRECT!!\n");
            } else {
                console.log("\x1b[1;31m%s\x1b[0m", "\n INCORRECT!!\n\n" + this.guessesLeft + " GUESSES REMAINING\n");
                this.guessesLeft --;
            }
        this.stringCount = this.newStringCount;
    },
    // alerts the user if they run out of guesses 
    lossCondition: function() {
        if(!this.guessesLeft) {
            console.log("\nOH NO! YOU RAN OUT OF GUESSES. BETTER LUCK NEXT TIME...\n")
        }
    },
    // Congratulates and continues after a correct word, ends game after all words guessed
    gameEnd: function() {
        if(this.count === this.wordBank.length) {
            console.log("\nCONGRATULATIONS! ! ! ! !");
            console.log("\nWOW! YOU CORRECTLY GUESSED ALL THE WORDS, I'M IMPRESSED!\n");
        } else {
            console.log("\nCONGRATULATIONS!!! YOU GUESSED THE WORD!");
            console.log("\n BUT CAN YOU HANDLE.... ANOTHER WORD ??? \n");
            this.gameStart();
        }
    }
}
// initializes necessary functions and starts games
hangman.randomWord();
hangman.gameStart();
