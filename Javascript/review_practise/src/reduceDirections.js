const reduceDirections = (fullDirections) => {
  if (fullDirections.length === 1) {
    return fullDirections;
  }

  fullDirections.forEach((direction, index) => {
    if (direction === "SOUTH" && fullDirections[index + 1] === "NORTH") {
      fullDirections.splice(index, 2);
    }
  });
  console.log(fullDirections);
  return fullDirections;
};

module.exports = reduceDirections;
