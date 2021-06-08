const reverseArray = require("../src/reverseArray");

describe("reverseArray", () => {
  test("swaps 2 numbers of 2 element array", () => {
    expect(reverseArray([2, 3])).toEqual([3, 2]);
  });
});
