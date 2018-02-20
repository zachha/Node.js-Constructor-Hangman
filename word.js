const Letter = require('./letter.js');

function Word(word) {
    this.word = word.toUpperCase();
    this.letterArr = [];
    this.displayWord = ""
}

Word.prototype.letterPush = function() {
    for(i=0; i<this.word.length;i++) {
        let letterObj = new Letter(this.word[i]);
        this.letterArr.push(letterObj);
        this.displayWord += letterObj.toString() + " ";
    }
}

Word.prototype.letterGuess = function(char) {
    b.letterGuess(check);
}

var a = new Letter("a");
console.log(a);
a.check("c");
console.log(a.toString());
var b = new Word("Hello");
console.log(b.word);
b.letterPush();
console.log(b.letterArr);
console.log(b.displayWord);