function digitalRoot(number) {
  const toArray = (number) => {
    return number.toString().split("");
  };

  const toInt = (array) => {
    return array.map((digit) => parseInt(digit));
  };

  const sum = (array) => {
    return array.reduce((a, b) => a + b);
  };

  const findRoot = (number) => {
    return sum(toInt(toArray(number)));
  };

  let result = findRoot(number);

  if (result > 9) {
    result = findRoot(result);
  }

  return result;
}

module.exports = digitalRoot;
