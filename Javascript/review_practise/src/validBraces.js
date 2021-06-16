function validBraces(string) {
  if (string === "(" || string === "{") {
    return false;
  } else {
    return true;
  }
}

module.exports = validBraces;
