const digitalRoot = require("../src/digitalRoot");

describe("digitalRoot", () => {
  test("given 1 it returns 1", () => {
    expect(digitalRoot(1)).toEqual(1);
  });

  test("given 2 it returns 2", () => {
    expect(digitalRoot(2)).toEqual(2);
  });
});
