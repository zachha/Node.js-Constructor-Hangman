function Letter(char) {
    this.char = char;
    this.guessed = false;
}
// reveals guessed chars
Letter.prototype.toString = function() {
    if (this.guessed) {
        return this.char;
    } else {
        let hidden = "_";
        return hidden;
    }
}
// sets up conditional for guessed chars to be revealed in toString method
Letter.prototype.check = function(guessedChar) {
    if(guessedChar === this.char) {
        this.guessed = true;
        return this.toString();
    }
    return this.toString();
}

module.exports = Letter;