const stringCalculator = require("../src/stringCalculator");

describe("stringCalculator", () => {
  it("receives '1' and returns 1 and '1'", () => {
    expect(stringCalculator("1")).toEqual(["1", 1]);
  });

  it("receives '2' and returns 2 and '2'", () => {
    expect(stringCalculator("2")).toEqual(["2", 2]);
  });

  it("receives '12' and returns 12 and '12'", () => {
    expect(stringCalculator("12")).toEqual(["12", 12]);
  });

  it("receives a 2 term sum, '1 + 1', and returns the result, 2, and '1 + 1'", () => {
    expect(stringCalculator("1 + 1")).toEqual(["1 + 1", 2]);
  });

  it("receives a 2 term sum, '1 + 2', and returns the result, 3, and '1 + 2'", () => {
    expect(stringCalculator("1 + 2")).toEqual(["1 + 2", 3]);
  });

  it("receives a 3 term sum, '1 + 1 + 1', and returns the result, 3, and '1 + 1 + 1'", () => {
    expect(stringCalculator("1 + 1 + 1")).toEqual(["1 + 1 + 1", 3]);
  });
});
