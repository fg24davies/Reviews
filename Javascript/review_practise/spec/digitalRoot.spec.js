const digitalRoot = require("../src/digitalRoot");

describe("digitalRoot", () => {
  test("given 1 it returns 1", () => {
    expect(digitalRoot(1)).toEqual(1);
  });
});
