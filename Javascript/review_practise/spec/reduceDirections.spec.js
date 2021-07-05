const reduceDirections = require("../src/reduceDirections");

describe("reduceDirections", () => {
  test("it returns North if only direction of North given ", () => {
    expect(reduceDirections(["NORTH"])).toEqual(["NORTH"]);
  });
});
