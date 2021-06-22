const likes = (names) => {
  if (names.length === 0) {
    return "no one likes this";
  } else {
    return `${names[0]} likes this`;
  }
};

module.exports = likes;
