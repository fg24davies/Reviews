const boulesScore = require("../src/boulesScore");

describe("boulesScore", () => {
  test("red scores if only one red ball thrown and jack", () => {
    expect(
      boulesScore([
        { type: "red", distance: [85, 0] },
        { type: "jack", distance: [80, 0] },
      ])
    ).toEqual("red scores 1");
  });

  test("black scores if only one black ball thrown and jack", () => {
    expect(
      boulesScore([
        { type: "black", distance: [85, 0] },
        { type: "jack", distance: [80, 0] },
      ])
    ).toEqual("black scores 1");
  });
});
