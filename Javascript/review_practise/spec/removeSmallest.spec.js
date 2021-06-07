const removeSmallest = require("../src/removeSmallest");

describe("remove smallest function", () => {
  test("returns an empty array if given empty array", () => {
    expect(removeSmallest([])).toEqual([]);
  });

  test("returns an array with the smallest number removed", () => {
    expect(removeSmallest([1, 2, 3])).toEqual([2, 3]);
  });

  test("returns an array with the smallest number at the lowest index removed", () => {
    expect(removeSmallest([1, 2, 3, 1])).toEqual([2, 3, 1]);
  });
});
