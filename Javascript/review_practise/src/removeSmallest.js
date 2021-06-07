function removeSmallest(inputArray) {
  if (inputArray.length === 0) {
    return inputArray;
  }
  var min = Math.min(...inputArray);
  //console.log(min);
  const outputArray = inputArray.filter((number) => number > min);
  //console.log(outputArray);
  return outputArray;
}

module.exports = removeSmallest;
