function boulesScore(balls) {
  let jackXPosition = balls[balls.length - 1].distance[0];
  let jackYPosition = balls[balls.length - 1].distance[1];
  let redDistances = [];
  let blackDistances = [];

  for (let i = 0; i < balls.length - 1; i++) {
    let ballDistance = Math.sqrt(
      Math.pow(Math.abs(balls[i].distance[0] - jackXPosition), 2) +
        Math.pow(Math.abs(balls[i].distance[1] - jackYPosition), 2)
    );
    if (balls[i].type === "black") {
      blackDistances.push(ballDistance);
    } else {
      redDistances.push(ballDistance);
    }
  }
  console.log("black distances", blackDistances);
  console.log("red distances", redDistances);

  if (Math.min(...blackDistances) > Math.min(...redDistances)) {
    return "red scores 1";
  } else {
    return "black scores 1";
  }
}

module.exports = boulesScore;
