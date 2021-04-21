
class Guess {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }

  guess(n) {
    if (n === this.number) {
      return true;
    } else {
      this.lives--
      return false;
    }
  }

}

module.exports = Guess;