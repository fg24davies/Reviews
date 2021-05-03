function pluck(array, key) {
  return array.map(object => object[key]);
}

module.exports = pluck;
