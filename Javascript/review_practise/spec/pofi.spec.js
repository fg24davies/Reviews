const pofi = require("../src/pofi");

describe("power of i function", () => {
  test("i to the power 0", () => {
    expect(pofi(0)).toEqual("1");
  });

  test("i to the power 1", () => {
    expect(pofi(1)).toEqual("i");
  });
});
