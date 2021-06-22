const likes = (names) => {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else {
    return `${names[0]} and ${names[1]} like this`;
  }
};

module.exports = likes;
