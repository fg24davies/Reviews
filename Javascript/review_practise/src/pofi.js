function pofi(n) {
  //edge case of 0
  if (n === 0) {
    return "1";
  }

  //even n
  if (n % 2 === 0 && (n / 2) % 2 === 0) {
    return "1";
  }
  if (n % 2 === 0) {
    return "-1";
  }

  //odd n
  if (n % 2 != 0 && ((n - 1) / 2) % 2 === 0) {
    return "i";
  } else {
    return "-i";
  }
}

module.exports = pofi;
