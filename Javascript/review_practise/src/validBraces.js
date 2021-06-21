function validBraces(string) {
  if (string.endsWith("(") || string.endsWith("{") || string.endsWith("[")) {
    return false;
  } else if (string.startsWith("]")) {
    return false;
  } else {
    return true;
  }
}

module.exports = validBraces;
