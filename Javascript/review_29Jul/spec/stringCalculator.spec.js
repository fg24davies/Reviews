const stringCalculator = require("../src/stringCalculator");

describe("stringCalculator", () => {
  it("takes a single number as a string and returns the string and the value of the number", () => {
    expect(stringCalculator("1")).toEqual(["1", 1]);
  });

  it("takes a single number as a string and returns the string and the value of the number", () => {
    expect(stringCalculator("2")).toEqual(["2", 2]);
  });
});
