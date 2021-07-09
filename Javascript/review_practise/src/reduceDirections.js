const reduceDirections = (fullDirections) => {
  if (fullDirections.length === 1) {
    return fullDirections;
  } else {
    return [];
  }
};

module.exports = reduceDirections;
