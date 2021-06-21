const digitalRoot = require("../src/digitalRoot");

describe("digitalRoot", () => {
  test("given 1 it returns 1", () => {
    expect(digitalRoot(1)).toEqual(1);
  });

  test("given 2 it returns 2", () => {
    expect(digitalRoot(2)).toEqual(2);
  });

  test("given 21 it returns 3", () => {
    expect(digitalRoot(21)).toEqual(3);
  });

  test("given 89 it returns 8", () => {
    expect(digitalRoot(89)).toEqual(8);
  });

  test("given 493193 it returns 2", () => {
    expect(digitalRoot(493193)).toEqual(2);
  });
});
