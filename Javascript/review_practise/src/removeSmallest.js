function removeSmallest(inputArray) {
  // empty array case
  if (inputArray.length === 0) {
    return inputArray;
  }
  // find min of array
  var min = Math.min(...inputArray);

  //make a copy of array
  let outputArray = inputArray.slice();

  // delete the first min number
  outputArray.splice(outputArray.indexOf(min), 1);
  return outputArray;
}

module.exports = removeSmallest;
