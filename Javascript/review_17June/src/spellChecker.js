function spellChecker(sentence) {
  const wordBank = ["the", "fox", "brown"];

  for (let i = 0; i < wordBank.length; i++) {
    if (sentence === wordBank[i]) {
      return sentence;
    }
  }
  //console.log("word not in wordBank", sentence);
  return `~${sentence}~`;
}

module.exports = spellChecker;
