const oddOneOut = require("../src/oddOneOut");

describe("oddOneOut", () => {
  test("it returns the non-matching number in array of 3 numbers", () => {
    expect(oddOneOut([1, 1, 2])).toEqual(2);
  });

  test("it returns the non-matching number in array of 3 numbers", () => {
    expect(oddOneOut([1, 1, 3])).toEqual(3);
  });
});
