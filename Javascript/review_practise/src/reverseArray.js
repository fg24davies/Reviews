function reverseArray(array) {
  let endIndex = array.length - 1;
  //let startIndex = 0;

  // while (startIndex < endIndex) {
  //   let temp = array[startIndex];
  //   array[startIndex] = array[endIndex];
  //   array[endIndex] = temp;
  //   startIndex++;
  //   endIndex--;
  //   console.log(array);
  // }

  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[endIndex - i];
    array[endIndex - i] = temp;
  }
  return array;
}

module.exports = reverseArray;
