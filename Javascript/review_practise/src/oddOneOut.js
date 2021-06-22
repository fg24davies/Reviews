const oddOneOut = (numbersArray) => {
  for (let i = 1; i < numbersArray.length; i++) {
    if (
      numbersArray[i] !== numbersArray[i + 1] &&
      numbersArray[i] !== numbersArray[i - 1]
    ) {
      return numbersArray[i];
    }
  }
};

module.exports = oddOneOut;
