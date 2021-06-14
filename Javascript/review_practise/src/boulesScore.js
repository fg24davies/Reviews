function boulesScore(balls) {
  if (balls[0].type === "red") {
    return "Red scores 1";
  } else if (balls[0].type === "black") {
    return "Black scores 1";
  }
}

module.exports = boulesScore;
