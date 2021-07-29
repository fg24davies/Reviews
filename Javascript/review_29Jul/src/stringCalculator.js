const stringCalculator = (string) => {
  sumArray = string.split(" ");
  result = parseInt(sumArray[0]);
  for (let i = 0; i < sumArray.length; i++) {
    console.log("result", result);
    console.log("array element", sumArray[i]);
    if (sumArray[i] === "+") {
      result += parseInt(sumArray[i + 1]);
    } else if (sumArray[i] === "-") {
      result -= parseInt(sumArray[i + 1]);
    }
  }
  return [string, result];
};

module.exports = stringCalculator;
