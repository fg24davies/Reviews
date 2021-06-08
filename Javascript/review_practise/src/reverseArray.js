function reverseArray(array) {
  let endIndex = array.length - 1;
  // console.log(endIndex);

  for (let i = 0; i < endIndex; i++) {
    let temp = array[i];
    array[i] = array[endIndex - i];
    array[endIndex - i] = temp;
  }
  return array;
}

module.exports = reverseArray;
