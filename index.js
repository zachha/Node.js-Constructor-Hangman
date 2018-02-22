//requiring packages and importing constructors
const Word = require('./word');
const inquirer = require('inquirer');

let hangman = {
    //array of words for user to guess
    wordBank: ["Giraffe", "Elephant", "Camel", "Sloth"],
    //array keeps track of letters user has already used
    alreadyGuessed: [],
    //keeps track of word order in wordbank array
    count: 0,
    //keeps track of user guesses left
    guessesLeft: 10,
    //randomizes the array for the user every time they play
    randomWord: function() {
        this.wordBank.sort((function(a,b){return 0.5 - Math.random()}))
    },
    //keeps the random order of array words going until the user finishes or stops playing
    gameStart: function() {
        let start = new Word(this.wordBank[this.count]);
        console.log(start);
        start.letterPush();
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
            // Use user feedback for... whatever!!
          });
    }
}
hangman.randomWord();
hangman.gameStart();


//User letter input (validation thru inquirer code is possible I think)

//keeps track of # of guesses