const zipWith = require("../src/zipWith");

describe("zipWith", () => {
  const add = function (a, b) {
    return a + b;
  };

  test.skip("takes a function and two arrays as argumnts", () => {
    expect(zipWith(add, [0], [0])).toEqual([0]);
  });

  test.skip("takes a function and two arrays as arguemnts", () => {
    expect(zipWith(add, [1], [0])).toEqual([1]);
  });

  test.skip("takes a function and two arrays as arguemnts", () => {
    expect(zipWith(add, [1, 2], [0, 2])).toEqual([1, 4]);
  });

  test.skip("takes a function and two arrays as arguemnts", () => {
    expect(zipWith(add, [1, 2], [2])).toEqual([3]);
  });
});
