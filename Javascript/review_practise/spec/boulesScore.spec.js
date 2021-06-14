const boulesScore = require("../src/boulesScore");

describe("boulesScore", () => {
  test("red scores 1 being closest in a line", () => {
    expect(
      boulesScore([
        { type: "black", distance: [70, 0] },
        { type: "red", distance: [85, 0] },
        { type: "jack", distance: [80, 0] },
      ])
    ).toEqual("Red scores 1");
  });
});
