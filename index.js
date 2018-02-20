//requiring packages and importing constructors
const Word = require('./word');
const inquirer = require('inquirer');

let hangman = {
    //array of words for user to guess
    wordBank: ["Giraffe", "Elephant", "Camel", "Sloth"],
    //array keeps track of letters user has already used
    alreadyGuessed: [],
    //randomizes the array for the user every time they play
    randomWord: function() {
        this.wordBank.sort((function(a,b){return 0.5 - Math.random()}))
    },
    //keeps the random order of array words going until the user finishes or stops playing
    gameStart: function() {
        for(i=0;i<this.wordBank.length;i++) {
            let start = new Word(wordBank[i]);
        }
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


//User letter input (validation thru inquirer code is possible I think)

//keeps track of # of guesses