function spellChecker(sentence) {
  const wordBank = ["the", "fox"];

  for (let i = 0; i < wordBank.length; i++) {
    if (sentence === wordBank[i]) {
      return sentence;
    }
  }
}

module.exports = spellChecker;
