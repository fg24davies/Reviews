function validBraces(string) {
  if (string.endsWith("(") || string.endsWith("{") || string.endsWith("[")) {
    return false;
  } else {
    return true;
  }
}

module.exports = validBraces;
