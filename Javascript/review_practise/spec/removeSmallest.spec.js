const removeSmallest = require("../src/removeSmallest");

describe("remove smallest function", () => {
  test("returns an empty array if given empty array", () => {
    expect(removeSmallest([])).toEqual([]);
  });
});
