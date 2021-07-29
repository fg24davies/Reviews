const stringCalculator = (string) => {
  if (string.length === 1) {
    result = parseInt(string);
    return [string, result];
  }
  result = 0;
  for (let i = 0; i < string.length; i += 4) {
    result += parseInt(string[i]);
  }

  //result = parseInt(string[0]) + parseInt(string[4]);
  return [string, result];
};

module.exports = stringCalculator;
