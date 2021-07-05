const reduceDirections = (fullDirections) => {
  if (fullDirections.length === 1) {
    return fullDirections;
  }
  if (fullDirections[0] === "NORTH" && fullDirections[1] === "SOUTH") {
    return [];
  }
};

module.exports = reduceDirections;
