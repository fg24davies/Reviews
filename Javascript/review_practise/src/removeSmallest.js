function removeSmallest(inputArray) {
  if (inputArray.length === 0) {
    return inputArray;
  }
  var min = Math.min(...inputArray);

  //make a copy of array
  let outputArray = inputArray.slice();
  outputArray.splice(outputArray.indexOf(min), 1);

  console.log(min);
  //console.log(min);
  //const outputArray = inputArray.filter((number) => number > min);
  console.log(outputArray);
  return outputArray;
}

module.exports = removeSmallest;
