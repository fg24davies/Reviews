const reduceDirections = require("../src/reduceDirections");

describe("reduceDirections", () => {
  test("it returns that direction if only one direction given ", () => {
    expect(reduceDirections(["NORTH"])).toEqual(["NORTH"]);
    expect(reduceDirections(["WEST"])).toEqual(["WEST"]);
  });

  test("it returns no direction if they cancel eachother out ", () => {
    expect(reduceDirections(["SOUTH", "NORTH"])).toEqual([]);
  });

  test("it returns the one direction left over if the othes cancel eachother out ", () => {
    expect(reduceDirections(["SOUTH", "NORTH", "WEST"])).toEqual(["WEST"]);
  });
});
