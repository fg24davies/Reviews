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

  test("red scores 1", () => {
    expect(
      boulesScore([
        { type: "black", distance: [70, 1] },
        { type: "red", distance: [85, -1] },
        { type: "jack", distance: [80, 0] },
      ])
    ).toEqual("red scores 1");
  });

  test("2 red balls are closer than any black balls: red scores 2", () => {
    expect(
      boulesScore([
        { type: "red", distance: [82, -1] },
        { type: "black", distance: [95, 1] },
        { type: "black", distance: [70, 1] },
        { type: "red", distance: [85, -1] },
        { type: "jack", distance: [80, 0] },
      ])
    ).toEqual("red scores 2");
  });

  test("2 black balls are closest, third closest is a red: black scores 2", () => {
    expect(
      boulesScore([
        { type: "red", distance: [92, -1] },
        { type: "red", distance: [95, 1] },
        { type: "red", distance: [88, -1] },
        { type: "black", distance: [95, 1] },
        { type: "black", distance: [85, 1] },
        { type: "black", distance: [84, 1] },
        { type: "jack", distance: [80, 0] },
      ])
    ).toEqual("black scores 2");
  });

  test("black ball is closest, then red and black ball are equidistance: black scores 1", () => {
    expect(
      boulesScore([
        { type: "red", distance: [92, -1] },
        { type: "red", distance: [85, 1] },
        { type: "red", distance: [88, -1] },
        { type: "black", distance: [95, 1] },
        { type: "black", distance: [85, 1] },
        { type: "black", distance: [84, 1] },
        { type: "jack", distance: [80, 0] },
      ])
    ).toEqual("black scores 1");
  });
});
