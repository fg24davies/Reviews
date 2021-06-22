const likes = (names) => {
  let pluralLike = "like this";
  let singularLike = "likes this";

  switch (names.length) {
    case 0:
      return `no one ${singularLike}`;
    case 1:
      return `${names[0]} ${singularLike}`;
    case 2:
      return `${names[0]} and ${names[1]} ${pluralLike}`;
  }
};

module.exports = likes;
