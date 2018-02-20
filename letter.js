function Letter(char) {
    this.char = char;
    this.guessed = false;
}
Letter.prototype.toString = function() {
    if (this.guessed) {
        return this.char;
    } else {
        let hidden = "_";
        return hidden;
    }
}

Letter.prototype.check = function(guessedChar) {
    if(guessedChar === this.char) {
        this.guessed = true;
        return this.toString();
    }
    return this.toString();
}

module.exports = Letter;