const reduceDirections = (fullDirections) => {
  const directionPairs = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };

  if (fullDirections.length === 1) {
    return fullDirections;
  }

  fullDirections.forEach((direction, index) => {
    if (directionPairs[direction] === fullDirections[index + 1]) {
      fullDirections.splice(index, 2);
    }
  });
  console.log(fullDirections);
  return fullDirections;
};

module.exports = reduceDirections;
