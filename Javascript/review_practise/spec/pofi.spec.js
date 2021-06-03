const pofi = require("../src/pofi");

describe("power of i function", () => {
  test("i to the power 0", () => {
    expect(pofi(0)).toEqual("1");
  });

  test("i to the power 1", () => {
    expect(pofi(1)).toEqual("i");
  });

  test("i to the power 2", () => {
    expect(pofi(2)).toEqual("-1");
  });

  test("i to the power 3", () => {
    expect(pofi(3)).toEqual("-i");
  });

  test("i to the power 4", () => {
    expect(pofi(4)).toEqual("1");
  });

  test("i to the power 5", () => {
    expect(pofi(5)).toEqual("i");
  });

  test("i to the power 6", () => {
    expect(pofi(6)).toEqual("-1");
  });
});
