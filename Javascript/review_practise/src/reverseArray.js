function reverseArray(array) {
  let endIndex = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[endIndex - i];
    array[endIndex - i] = temp;
  }
  return array;
}

module.exports = reverseArray;
