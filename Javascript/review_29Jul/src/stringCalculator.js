const stringCalculator = (string) => {
  sumArray = string.split(" ");
  //console.log("string as array", sumArray);

  result = 0;
  for (let i = 0; i < sumArray.length; i += 2) {
    console.log("string number", sumArray[i]);
    result += parseInt(sumArray[i]);
  }

  //result = parseInt(string[0]) + parseInt(string[4]);
  return [string, result];
};

module.exports = stringCalculator;
