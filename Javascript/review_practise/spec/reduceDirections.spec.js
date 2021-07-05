const reduceDirections = require("../src/reduceDirections");

describe("reduceDirections", () => {
  test("it returns North if only direction of North given ", () => {
    expect(reduceDirections(["NORTH"])).toEqual(["NORTH"]);
  });

  test("it returns West if only direction of West given ", () => {
    expect(reduceDirections(["WEST"])).toEqual(["WEST"]);
  });
});
