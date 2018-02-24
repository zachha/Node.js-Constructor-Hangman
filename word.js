const Letter = require('./letter.js');

function Word(word) {
    this.word = word.toUpperCase();
    this.letterArr = [];
    this.displayWord = "\n";
}
//uses letter.js constructor on each char of the selected word and displays the underscores for the word
Word.prototype.letterPush = function() {
    for(i=0; i<this.word.length;i++) {
        let letterObj = new Letter(this.word[i]);
        this.letterArr.push(letterObj);
        this.displayWord += letterObj.toString() + " ";
    }
    this.displayWord += "\n";
    console.log(this.displayWord);
}
// checks if the user's guess is correct and updates display
Word.prototype.letterGuess = function(char) {
    this.displayWord = "\n";

    for(i=0;i<this.letterArr.length;i++) {
         this.letterArr[i].check(char);
         this.displayWord += this.letterArr[i].toString() + " ";
    }
    this.displayWord += "\n";
}
module.exports = Word;