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
    //keeps track of user guesses left
    guessesLeft: 10,
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
    winCondition: function() {
        for(i=0;i<start.letterArr.length;i++) {
            if(start.letterArr[i] != "_") {
                this.stringCount ++;
            }
        }
        if(this.stringCount === start.letterArr.length) {
            this.count ++;
            this.gameEnd();
        } else {
            this.stringCount = 0;
            this.ask();  
        }
    },
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
hangman.randomWord();
hangman.gameStart();


//User letter input (validation thru inquirer code is possible I think)

//keeps track of # of guesses