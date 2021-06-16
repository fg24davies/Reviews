function validBraces(string) {
  console.log(string);

  if (string.endsWith("(") || string.endsWith("{")) {
    return false;
  } else {
    return true;
  }
}

module.exports = validBraces;
