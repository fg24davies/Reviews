function pofi(n) {
  //edge case of 0
  if (n === 0) {
    return "1";
  }

  //even n
  if (n % 2 === 0 && (n / 2) % 2 === 0) {
    return "1";
  }

  //odd n

  if (n === 1) {
    return "i";
  } else if (n === 2) {
    return "-1";
  } else {
    return "-i";
  }
}

module.exports = pofi;
