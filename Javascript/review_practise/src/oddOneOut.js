const oddOneOut = (numbersArray) => {
  if (
    numbersArray[0] !== numbersArray[1] &&
    numbersArray[0] !== numbersArray[2]
  ) {
    return numbersArray[0];
  }

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
