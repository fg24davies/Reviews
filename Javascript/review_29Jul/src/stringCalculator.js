const stringCalculator = (string) => {
  if (string.length === 1) {
    result = parseInt(string);
    return [string, result];
  }

  result = parseInt(string[0]) + parseInt(string[4]);
  return [string, result];
};

module.exports = stringCalculator;
