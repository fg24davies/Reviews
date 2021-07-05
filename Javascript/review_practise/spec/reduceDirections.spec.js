const reduceDirections = require("../src/reduceDirections");

describe("reduceDirections", () => {
  test("it returns that direction if only one direction  given ", () => {
    expect(reduceDirections(["NORTH"])).toEqual(["NORTH"]);
    expect(reduceDirections(["WEST"])).toEqual(["WEST"]);
  });

  test("it returns  directons (empty array) if directions are opposite", () => {
    expect(reduceDirections(["NORTH", "SOUTH"])).toEqual([]);
  });
});
