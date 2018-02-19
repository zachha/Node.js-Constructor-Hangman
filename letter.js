function Letter(char) {
    this.char = char;
    this.guessed = false;
    /*
    this.toString = function() {
        if(this.guessed) {
           return this.char;
        } else {
            let hidden = "_";
            return hidden;
        }
    }
    this.check = function(guessedChar) {
        if(guessedChar === this.char) {
            this.guessed = true;
            return this.toString();
        }
        return this.toString();
    }
    */
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

let a = new Letter("a");
console.log(a);
a.check("c");
console.log(a.toString());



module.exports = Letter;