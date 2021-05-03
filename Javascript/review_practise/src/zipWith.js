
function zipWith(fn, array1, array2) {
  array = [];
  for (let i = 0; i < arrayLength(array1, array2); i++) {
    array.push(fn(array1[i],array2[i]));
  }
  return array;
}

function arrayLength(array1, array2) {
  return Math.min(array1.length, array2.length)
}

module.exports = zipWith