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

  let result = sum(toInt(toArray(number)));

  if (result > 9) {
    result = sum(toInt(toArray(result)));
  }

  return result;
}

module.exports = digitalRoot;
