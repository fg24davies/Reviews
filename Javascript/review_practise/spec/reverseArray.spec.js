const reverseArray = require("../src/reverseArray");

describe("reverseArray", () => {
  test("swaps 2 numbers of 2 element array", () => {
    expect(reverseArray([2, 3])).toEqual([3, 2]);
  });

  test("reverses a 6element array in less than 5ms", () => {
    function timer(reverseArray, array) {
      let start = performance.now();
      reverseArray(array);
      return (timeTaken = performance.now() - start);
    }
    timer(reverseArray, [1, 2, 3, 4, 5, 6]);
    console.log(timeTaken);
    expect(timeTaken).toBeLessThan(5);
  });

  test("reverses string array", () => {
    expect(reverseArray(["hello", "world", "how", "are", "you", "?"])).toEqual([
      "?",
      "you",
      "are",
      "how",
      "world",
      "hello",
    ]);
  });
});
