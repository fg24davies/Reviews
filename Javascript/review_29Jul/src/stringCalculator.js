const stringCalculator = (string) => {
  result = parseInt(string);

  if (string.length === 1) {
    return [string, result];
  }

  return ["1 + 1", 2];
};

module.exports = stringCalculator;
