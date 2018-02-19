function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.display = function() {
        if(this.guessed) {
           return this.char;
        } else {
            let hidden = "_";
            return hidden;
            //let underlying = this.char;
            //this.char = "_";
        }
    },
    this.check = function(guessedChar) {
        if(guessedChar === this.char) {
            this.guessed = true;
            this.display();
        }
    }
}