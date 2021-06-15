function boulesScore(balls) {
  const jackXPosition = balls[balls.length - 1].distance[0];
  const jackYPosition = balls[balls.length - 1].distance[1];
  let redDistances = [];
  let blackDistances = [];

  for (let i = 0; i < balls.length - 1; i++) {
    let ballDistance = absoluteBallDistance(
      balls[i].distance[0],
      balls[i].distance[1],
      jackXPosition,
      jackYPosition
    );

    if (balls[i].type === "black") {
      blackDistances.push(ballDistance);
    } else {
      redDistances.push(ballDistance);
    }
  }
  return distanceComparer(blackDistances, redDistances);
}

function absoluteBallDistance(x, y, jackXPosition, jackYPosition) {
  return Math.sqrt(
    Math.pow(Math.abs(x - jackXPosition), 2) +
      Math.pow(Math.abs(y - jackYPosition), 2)
  );
}

function distanceComparer(blackBalls, redBalls) {
  if (Math.min(...blackBalls) > Math.min(...redBalls)) {
    return `red scores ${countsPoints(redBalls, blackBalls)}`;
  } else {
    return `black scores ${countsPoints(blackBalls, redBalls)}`;
  }
}

function countsPoints(closestColourBalls, otherColourBalls) {
  let ballsCloser = [];
  for (let i = 0; i < closestColourBalls.length; i++) {
    let count = 0;
    for (let j = 0; j < otherColourBalls.length; j++) {
      if (otherColourBalls[j] <= closestColourBalls[i]) {
        count++;
      }
    }
    ballsCloser.push(count);
  }
  return ballsCloser.filter((element) => element === 0).length;
}

module.exports = boulesScore;
