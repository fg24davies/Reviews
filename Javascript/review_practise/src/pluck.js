
function pluck(objects, key) {
  outputArray = [];
  outputArray.push(objects[0][key]);
  return outputArray;
}

module.exports = pluck;
